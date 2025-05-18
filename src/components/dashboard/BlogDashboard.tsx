import React, { useEffect, useState } from 'react';
import { BlogPost, getAllBlogPosts, deleteBlogPost } from '@/lib/firebaseUtils';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { format } from 'date-fns';
import {
  Plus,
  Pencil,
  Trash2,
  Tag,
  Eye,
  Loader2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import BlogEditor from '../BlogEditor';

const BlogDashboard = () => {
  const { toast } = useToast();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showNewPostDialog, setShowNewPostDialog] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const fetchedPosts = await getAllBlogPosts();
      setPosts(fetchedPosts);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      toast({
        title: "Error",
        description: "Failed to load blog posts",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (post: BlogPost) => {
    if (!window.confirm('Are you sure you want to delete this post?')) return;

    try {
      await deleteBlogPost(post.id!);
      setPosts(posts.filter(p => p.id !== post.id));
      toast({
        title: "Success",
        description: "Blog post deleted successfully"
      });
    } catch (error) {
      console.error('Error deleting blog post:', error);
      toast({
        title: "Error",
        description: "Failed to delete blog post",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Blog Posts</h2>
        <Button
          onClick={() => setShowNewPostDialog(true)}
          className="bg-[#FFD700] hover:bg-[#e6c300] text-black"
        >
          <Plus className="w-4 h-4 mr-2" />
          New Post
        </Button>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-[#FFD700]" />
        </div>
      ) : posts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 mb-4">No blog posts yet</p>
          <Button
            onClick={() => setShowNewPostDialog(true)}
            variant="outline"
          >
            Create your first post
          </Button>
        </div>
      ) : (
        <div className="grid gap-4">
          {posts.map(post => (
            <div
              key={post.id}
              className="bg-white p-4 rounded-lg shadow flex items-center justify-between"
            >
              <div className="flex-grow mr-4">
                <h3 className="font-medium mb-1">{post.title}</h3>
                <div className="text-sm text-gray-500 mb-2">
                  {format(post.createdAt!, 'MMM d, yyyy')} • M-E-C webcraft
                </div>
                <div className="flex flex-wrap gap-2">
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
              <div className="flex items-center gap-2">
                <Link 
                  to={`/blog/${post.slug}`}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  title="View post"
                >
                  <Eye className="w-4 h-4" />
                </Link>
                <button
                  onClick={() => {
                    setSelectedPost(post);
                    setShowEditDialog(true);
                  }}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  title="Edit post"
                >
                  <Pencil className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(post)}
                  className="p-2 hover:bg-red-100 text-red-600 rounded-full transition-colors"
                  title="Delete post"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* New Post Dialog */}
      <Dialog open={showNewPostDialog} onOpenChange={setShowNewPostDialog}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Create New Blog Post</DialogTitle>
            <DialogDescription>
              Write a new blog post. All fields are required except tags.
            </DialogDescription>
          </DialogHeader>
          <BlogEditor />
        </DialogContent>
      </Dialog>

      {/* Edit Post Dialog */}
      <Dialog open={showEditDialog} onOpenChange={setShowEditDialog}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Edit Blog Post</DialogTitle>
            <DialogDescription>
              Make changes to your blog post.
            </DialogDescription>
          </DialogHeader>
          {selectedPost && <BlogEditor initialPost={selectedPost} />}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BlogDashboard;