import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { Link, useNavigate } from 'react-router-dom';
import { Navbar } from "@/components/Navbar";
import { navItems } from "@/lib/data";
import { BlogPost, getAllBlogPosts } from '@/lib/firebaseUtils';
import { format } from 'date-fns';
import { Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet';

const ALLOWED_TAGS = ["Cloud Computing", "Backend", "Frontend"];

const Blog = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const handleNavClick = (sectionId: string) => {
    if (sectionId.startsWith('/')) {
      navigate(sectionId);
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getAllBlogPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const allTags = Array.from(new Set(posts.flatMap(post => 
    post.tags.filter(tag => ALLOWED_TAGS.includes(tag))
  )));
  const filteredPosts = selectedTag 
    ? posts.filter(post => post.tags.includes(selectedTag))
    : posts;

  return (
    <>
      <Helmet>
        <title>Web Development & Cloud Computing Blog | MEC-webcraft</title>
        <meta name="description" content="Expert insights on web development, cloud architecture, Python backend development, and modern web technologies. Stay updated with the latest in tech." />
        <meta name="keywords" content="web development blog, cloud computing articles, Python tutorials, React development, technical writing" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="blog" />
        <meta property="og:title" content="Web Development & Cloud Computing Blog | MEC-webcraft" />
        <meta property="og:description" content="Expert insights on web development, cloud architecture, and modern web technologies." />
        <link rel="canonical" href="https://mecwebcraft.com/blog" />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <Navbar items={navItems} onNavClick={handleNavClick} />
        
        <main className="container mx-auto px-4 py-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Blog</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Insights, tutorials, and updates from our team
              </p>
            </div>

            {/* Tags filter */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
              <Button
                variant={selectedTag === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTag(null)}
                className={selectedTag === null ? "bg-[#FFD700] text-black hover:bg-[#e6c300]" : ""}
              >
                All
              </Button>
              {allTags.map(tag => (
                <Button
                  key={tag}
                  variant={selectedTag === tag ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTag(tag)}
                  className={selectedTag === tag ? "bg-[#FFD700] text-black hover:bg-[#e6c300]" : ""}
                >
                  {tag}
                </Button>
              ))}
            </div>

            {/* Content */}
            {isLoading ? (
              <div className="flex justify-center py-20">
                <div className="animate-spin w-8 h-8 border-4 border-[#FFD700] border-t-transparent rounded-full"></div>
              </div>
            ) : filteredPosts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-gray-500">No blog posts found.</p>
              </div>
            ) : (
              <div className="grid gap-8">
                {filteredPosts.map(post => (
                  <article 
                    key={post.id} 
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    {post.coverImage && (
                      <img 
                        src={post.coverImage} 
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                    )}
                    <div className="p-6">
                      <div className="flex gap-2 mb-3">
                        {post.tags
                          .filter(tag => ALLOWED_TAGS.includes(tag))
                          .map(tag => (
                            <span 
                              key={tag}
                              className="inline-flex items-center text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                            >
                              <Tag className="w-3 h-3 mr-1" />
                              {tag}
                            </span>
                          ))}
                      </div>
                      <h2 className="text-2xl font-bold mb-2">
                        <Link to={`/blog/${post.slug}`} className="hover:text-[#FFD700] transition-colors">
                          {post.title}
                        </Link>
                      </h2>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-500">
                          M-E-C webcraft • {format(post.createdAt!, 'MMM d, yyyy')}
                        </div>
                        <Link 
                          to={`/blog/${post.slug}`}
                          className="text-[#FFD700] hover:text-[#e6c300] font-medium"
                        >
                          Read more →
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </motion.div>
        </main>
      </div>
    </>
  );
};

export default Blog;