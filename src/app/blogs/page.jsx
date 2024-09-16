import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div>
            {
                blogs.map((blog, slug)=> (
                    <div key={slug} className='border-2 rounded-2xl border-red-700 p-11 m-11'>
                        <h3>{blog.title}</h3>
                        <h4>{blog.description}</h4>
                        <button className='border-2 rounded-lg mt-9'>
                          <Link href={`/blogs${blog.slug}`}> View details</Link>
                        </button>
                    </div>
                ))
            }
        </div>
    );
};

export default page;

const blogs = [
    {
      "slug": "/embracing-digital-nomad-life",
      "title": "Embracing the Digital Nomad Life: Tips for Beginners",
      "description": "Discover essential tips for transitioning to a digital nomad lifestyle, from finding remote work to managing your finances while traveling the world."
    },
    {
      "slug": "/healthy-eating-on-a-budget",
      "title": "Healthy Eating on a Budget: Delicious and Affordable Recipes",
      "description": "Learn how to eat well without breaking the bank with our collection of nutritious, budget-friendly recipes and meal planning strategies."
    },
    {
      "slug": "/the-future-of-ai-in-business",
      "title": "The Future of AI in Business: Trends and Predictions",
      "description": "Explore how artificial intelligence is transforming the business landscape, including emerging trends and what to expect in the coming years."
    },
    {
      "slug": "/mindfulness-meditation-for-beginners",
      "title": "Mindfulness Meditation for Beginners: A Step-by-Step Guide",
      "description": "Start your journey into mindfulness with this comprehensive guide for beginners, featuring practical exercises and tips to build a sustainable practice."
    },
    {
      "slug": "/sustainable-living-tips",
      "title": "Sustainable Living Tips: How to Make Your Lifestyle Eco-Friendly",
      "description": "Find practical advice for reducing your environmental footprint and living a more sustainable lifestyle, from eco-friendly products to green habits."
    },
    {
      "slug": "/maximizing-productivity-at-work",
      "title": "Maximizing Productivity at Work: Proven Strategies and Tools",
      "description": "Boost your work efficiency with these proven productivity strategies and tools designed to help you manage your time and tasks more effectively."
    },
    {
      "slug": "/the-best-books-of-2024",
      "title": "The Best Books of 2024: Must-Reads for Every Book Lover",
      "description": "Check out our curated list of the best books released in 2024, including top fiction, non-fiction, and emerging authors you won't want to miss."
    },
    {
      "slug": "/home-office-setup-ideas",
      "title": "Home Office Setup Ideas: Creating a Productive Workspace",
      "description": "Transform your home office into a productive and inspiring workspace with these creative setup ideas and tips for optimizing your environment."
    },
    {
      "slug": "/travel-tips-for-solo-adventurers",
      "title": "Travel Tips for Solo Adventurers: Stay Safe and Have Fun",
      "description": "Get the best travel advice for solo adventurers, including safety tips, packing essentials, and how to make the most of your solo trips."
    },
    {
      "slug": "/digital-marketing-trends-2024",
      "title": "Digital Marketing Trends for 2024: What You Need to Know",
      "description": "Stay ahead of the curve with our roundup of the top digital marketing trends for 2024, including emerging technologies and strategies to boost your online presence."
    }
  ]
  