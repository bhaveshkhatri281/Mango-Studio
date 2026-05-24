import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blogData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

const getCategoryGradient = (category: string) => {
  switch (category) {
    case "Science":
      return "from-blue-600 to-blue-900";
    case "Health":
      return "from-green-600 to-green-900";
    case "Technology":
      return "from-purple-600 to-purple-900";
    case "Fruit Guide":
      return "from-yellow-500 to-yellow-800";
    case "Our Story":
      return "from-[#FF6B00] to-red-900";
    default:
      return "from-gray-600 to-gray-900";
  }
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white pt-[72px]">
      <Navbar />

      <article className="max-w-3xl mx-auto px-6 py-16">
        {/* ARTICLE HEADER */}
        <div className="mb-12 text-center">
          <span className="inline-block bg-[#FF6B00]/20 text-[#FF6B00] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-6">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            {post.title}
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-center gap-4 text-sm font-medium text-gray-500">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
            <span>·</span>
            <span className="text-[#FF6B00]">By Mango Studio Team</span>
          </div>
        </div>

        {/* HERO BLOCK */}
        <div
          className={`w-full h-[400px] rounded-2xl bg-gradient-to-br ${getCategoryGradient(
            post.category
          )} mb-16 relative overflow-hidden flex items-center justify-center shadow-2xl`}
        >
          <span className="text-white/10 font-black text-[200px] absolute -bottom-16 -right-10 transform -rotate-12 select-none pointer-events-none">
            M
          </span>
        </div>

        {/* ARTICLE BODY */}
        <div
          className="prose prose-invert prose-lg max-w-none mb-16"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* ARTICLE FOOTER */}
        <div className="border-t border-white/10 pt-8 mt-16 mb-24">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-gray-500 uppercase tracking-widest mr-2">
                Tags:
              </span>
              {["Health", "Mango", "Cold Pressed"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full border border-white/10 text-xs font-bold text-gray-300 hover:border-[#FF6B00] hover:text-[#FF6B00] transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-[#FF6B00] hover:text-[#FF6B00] transition-colors font-bold text-xs">
                X
              </button>
              <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-[#FF6B00] hover:text-[#FF6B00] transition-colors font-bold text-xs">
                IG
              </button>
              <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-[#FF6B00] hover:text-[#FF6B00] transition-colors font-bold text-xs">
                URL
              </button>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#FF6B00] font-bold hover:gap-4 transition-all"
            >
              <ArrowLeft className="w-5 h-5" /> Back to Blog
            </Link>
          </div>
        </div>

        {/* RELATED POSTS */}
        <div className="mb-16">
          <h3 className="text-2xl font-extrabold text-white mb-8">
            More from Mango Studio
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.slug}
                href={`/blog/${relatedPost.slug}`}
                className="group flex flex-col h-full bg-[#1A1A1A] rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-all"
              >
                <div
                  className={`w-full h-[150px] bg-gradient-to-br ${getCategoryGradient(
                    relatedPost.category
                  )} relative overflow-hidden flex items-center justify-center`}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-[#FF6B00] text-[10px] font-bold uppercase tracking-widest mb-2">
                    {relatedPost.category}
                  </span>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-[#FF6B00] transition-colors leading-snug">
                    {relatedPost.title}
                  </h4>
                  <p className="text-gray-400 text-sm line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
