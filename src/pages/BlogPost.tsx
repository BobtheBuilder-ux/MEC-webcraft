import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { navItems } from "@/lib/data";
import { BlogPost as BlogPostType, getAllBlogPosts } from '@/lib/firebaseUtils';
import { format } from 'date-fns';
import { ArrowLeft, Tag, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleNavClick = (sectionId: string) => {
    if (sectionId.startsWith('/')) {
      navigate(sectionId);
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const posts = await getAllBlogPosts();
        const foundPost = posts.find(p => p.slug === slug);
        if (foundPost) {
          setPost(foundPost);
        }
      } catch (error) {
        console.error('Error fetching blog post:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar items={navItems} onNavClick={handleNavClick} />
        <div className="flex justify-center items-center min-h-[60vh]">
          <div className="animate-spin w-8 h-8 border-4 border-[#FFD700] border-t-transparent rounded-full"></div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar items={navItems} onNavClick={handleNavClick} />
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
            <Button
              onClick={() => navigate('/blog')}
              variant="outline"
              className="mt-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {post && (
        <Helmet>
          <title>{`${post.title} | MEC-webcraft Blog`}</title>
          <meta name="description" content={post.excerpt} />
          <meta name="keywords" content={post.tags.join(', ') + ', web development, cloud computing, technical blog'} />
          <meta name="robots" content="index, follow" />
          <meta property="og:type" content="article" />
          <meta property="og:title" content={post.title} />
          <meta property="og:description" content={post.excerpt} />
          {post.coverImage && <meta property="og:image" content={post.coverImage} />}
          <meta property="article:published_time" content={post.createdAt?.toISOString()} />
          <meta property="article:author" content="MEC-webcraft" />
          <meta property="article:section" content={post.tags[0]} />
          <meta property="article:tag" content={post.tags.join(', ')} />
          <link rel="canonical" href={`https://mecwebcraft.com/blog/${post.slug}`} />
        </Helmet>
      )}
      <div className="min-h-screen bg-gray-50">
        <Navbar items={navItems} onNavClick={handleNavClick} />
        
        <main className="container mx-auto px-4 py-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <Button
              onClick={() => navigate('/blog')}
              variant="outline"
              className="mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>

            {post.coverImage && (
              <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-1" />
                  M-E-C webcraft
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {format(post.createdAt!, 'MMMM d, yyyy')}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.map(tag => (
                  <span
                    key={tag}
                    className="inline-flex items-center text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                  >
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </motion.div>
          </motion.div>
        </main>
      </div>
    </>
  );
};

export default BlogPost;