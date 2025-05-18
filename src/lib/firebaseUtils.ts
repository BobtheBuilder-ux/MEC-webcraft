import { auth, db, storage } from './firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  type User
} from 'firebase/auth';
import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  deleteDoc,
  Timestamp,
  query,
  orderBy,
  where,
  updateDoc
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  githubUrl?: string;
  tools?: string[];
  phoneScreenshot?: string;
  desktopScreenshot?: string;
  createdAt?: Date;
}

// Auth functions
export const registerUser = async (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const loginUser = async (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logoutUser = async () => {
  return signOut(auth);
};

export const onAuthStateChange = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback);
};

// Project functions
export const getAllProjects = async () => {
  console.log('Fetching all projects...');
  try {
    const projectsRef = collection(db, 'projects');
    const q = query(projectsRef, orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    
    console.log(`Retrieved ${snapshot.docs.length} projects from Firestore`);
    
    const projects = snapshot.docs.map(doc => {
      const data = doc.data();
      // Ensure createdAt is properly converted to a Date object if it exists
      const createdAt = data.createdAt ? data.createdAt.toDate() : new Date();
      
      // Ensure tags are properly converted to an array if they exist
      const tags = Array.isArray(data.tags) ? data.tags : 
                  (typeof data.tags === 'string' ? data.tags.split(',') : []);
      
      return {
        id: doc.id,
        ...data,
        createdAt,
        tags
      };
    }) as Project[];
    
    console.log('Processed projects:', projects);
    return projects;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
};

export const getProject = async (id: string) => {
  const docRef = doc(db, 'projects', id);
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) {
    throw new Error('Project not found');
  }
  return {
    id: docSnap.id,
    ...docSnap.data(),
    createdAt: docSnap.data().createdAt?.toDate()
  } as Project;
};

export const addProject = async (projectData: Omit<Project, 'id' | 'createdAt'>) => {
  console.log('Adding project to Firebase:', projectData);
  
  try {
    // Clean the object by removing undefined values or converting them to null
    const cleanedData = Object.entries(projectData).reduce((acc, [key, value]) => {
      // If value is undefined, don't include it in the cleaned data (Firestore will use default value if schema has one)
      // Or set it to null if you prefer: acc[key] = value === undefined ? null : value;
      if (value !== undefined) {
        acc[key] = value;
      }
      return acc;
    }, {} as Record<string, any>);
    
    console.log('Cleaned project data for Firestore:', cleanedData);
    
    const projectRef = await addDoc(collection(db, 'projects'), {
      ...cleanedData,
      createdAt: Timestamp.now()
    });
    
    console.log('Project added successfully with ID:', projectRef.id);
    
    // Fetch the newly created project to confirm it exists
    const newDoc = await getDoc(doc(db, 'projects', projectRef.id));
    console.log('New project exists in Firestore:', newDoc.exists(), newDoc.data());
    
    return projectRef.id;
  } catch (error) {
    console.error('Error adding project to Firestore:', error);
    throw error;
  }
};

export const deleteProject = async (id: string) => {
  await deleteDoc(doc(db, 'projects', id));
};

// Storage functions
export const uploadImage = async (file: File, path: string) => {
  const storageRef = ref(storage, path);
  await uploadBytes(storageRef, file);
  return getDownloadURL(storageRef);
};

// Lead Capture types
export interface Lead {
  id?: string;
  name: string;
  email: string;
  inquiry: string;
  followUpAnswers?: Record<string, string>;
  appointmentDate?: Date;
  createdAt: Date;
}

// Lead Capture functions
export const addLead = async (leadData: Omit<Lead, 'id' | 'createdAt'>) => {
  try {
    // Clean the object by removing undefined values
    const cleanedData = Object.entries(leadData).reduce((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = value;
      }
      return acc;
    }, {} as Record<string, any>);
    
    const leadRef = await addDoc(collection(db, 'leads'), {
      ...cleanedData,
      createdAt: Timestamp.now()
    });
    
    return leadRef.id;
  } catch (error) {
    console.error('Error adding lead to Firestore:', error);
    throw error;
  }
};

export const updateLead = async (id: string, data: Partial<Lead>) => {
  try {
    const leadRef = doc(db, 'leads', id);
    await updateDoc(leadRef, data);
    return id;
  } catch (error) {
    console.error('Error updating lead in Firestore:', error);
    throw error;
  }
};

export const getAllLeads = async () => {
  try {
    const leadsRef = collection(db, 'leads');
    const q = query(leadsRef, orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    
    const leads = snapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        createdAt: data.createdAt.toDate(),
        appointmentDate: data.appointmentDate ? data.appointmentDate.toDate() : undefined
      };
    }) as Lead[];
    
    return leads;
  } catch (error) {
    console.error('Error fetching leads:', error);
    throw error;
  }
};

export const getLead = async (id: string) => {
  const docRef = doc(db, 'leads', id);
  const docSnap = await getDoc(docRef);
  
  if (!docSnap.exists()) {
    throw new Error('Lead not found');
  }
  
  const data = docSnap.data();
  return {
    id: docSnap.id,
    ...data,
    createdAt: data.createdAt.toDate(),
    appointmentDate: data.appointmentDate ? data.appointmentDate.toDate() : undefined
  } as Lead;
};

export const deleteLead = async (id: string) => {
  try {
    const leadRef = doc(db, 'leads', id);
    await deleteDoc(leadRef);
  } catch (error) {
    console.error('Error deleting lead from Firestore:', error);
    throw error;
  }
};

// Blog types
export interface BlogPost {
  id?: string;
  title: string;
  content: string;
  excerpt: string;
  coverImage?: string;
  author: {
    id: string;
    name: string;
  };
  tags: string[];
  createdAt?: Date;
  updatedAt?: Date;
  slug: string;
}

// Blog functions
export const createBlogPost = async (postData: Omit<BlogPost, 'id' | 'createdAt' | 'updatedAt'>) => {
  try {
    const cleanedData = Object.entries(postData).reduce((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = value;
      }
      return acc;
    }, {} as Record<string, any>);

    const now = Timestamp.now();
    const postRef = await addDoc(collection(db, 'blog_posts'), {
      ...cleanedData,
      createdAt: now,
      updatedAt: now
    });

    return postRef.id;
  } catch (error) {
    console.error('Error adding blog post to Firestore:', error);
    throw error;
  }
};

export const updateBlogPost = async (id: string, data: Partial<BlogPost>) => {
  try {
    const postRef = doc(db, 'blog_posts', id);
    const updateData = {
      ...data,
      updatedAt: Timestamp.now()
    };
    await updateDoc(postRef, updateData);
    return id;
  } catch (error) {
    console.error('Error updating blog post in Firestore:', error);
    throw error;
  }
};

export const getAllBlogPosts = async () => {
  try {
    const postsRef = collection(db, 'blog_posts');
    const q = query(postsRef, orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);

    const posts = snapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        createdAt: data.createdAt.toDate(),
        updatedAt: data.updatedAt.toDate()
      };
    }) as BlogPost[];

    return posts;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    throw error;
  }
};

export const getBlogPost = async (id: string) => {
  try {
    const postRef = doc(db, 'blog_posts', id);
    const docSnap = await getDoc(postRef);

    if (!docSnap.exists()) {
      throw new Error('Blog post not found');
    }

    const data = docSnap.data();
    return {
      id: docSnap.id,
      ...data,
      createdAt: data.createdAt.toDate(),
      updatedAt: data.updatedAt.toDate()
    } as BlogPost;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    throw error;
  }
};

export const deleteBlogPost = async (id: string) => {
  try {
    await deleteDoc(doc(db, 'blog_posts', id));
  } catch (error) {
    console.error('Error deleting blog post:', error);
    throw error;
  }
};