import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Image, Headphones, ShoppingBag, Heart, Share2, MessageCircle, Eye, Filter, Search, Star, Download, Rss } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Media() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('stream');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const mediaContent = {
    stream: [
      {
        id: 1,
        title: 'Digital Marketing Masterclass Preview',
        creator: 'Emma Wilson',
        thumbnail: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
        duration: '15:30',
        views: 12500,
        likes: 890,
        category: 'education',
        isPremium: false,
        type: 'movie'
      },
      {
        id: 2,
        title: 'Behind the Scenes: Fashion Shoot',
        creator: 'Sofia Rodriguez',
        thumbnail: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400',
        duration: '8:45',
        views: 8900,
        likes: 654,
        category: 'lifestyle',
        isPremium: true,
        type: 'music-video'
      }
    ],
    listen: [
      {
        id: 1,
        title: 'People in Tech: Breaking Barriers',
        creator: 'Dr. Sarah Johnson',
        thumbnail: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400',
        duration: '45:20',
        plays: 5600,
        category: 'business',
        isPremium: false,
        type: 'podcast'
      },
      {
        id: 2,
        title: 'Creative Minds Anthem',
        creator: 'The Flourish Band',
        thumbnail: 'https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg?auto=compress&cs=tinysrgb&w=400',
        duration: '3:15',
        plays: 12000,
        category: 'music',
        isPremium: false,
        type: 'audio-music'
      }
    ],
    blog: [
        {
            id: 1,
            title: '10 Tips for a Killer Personal Brand',
            creator: 'Alex Chen',
            thumbnail: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=400',
            readTime: '5 min read',
            category: 'branding',
        }
    ],
    gallery: [
      {
        id: 1,
        title: 'Brand Identity Collection',
        creator: 'Maya Chen',
        image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
        likes: 1200,
        category: 'design',
        isPremium: false
      },
      {
        id: 2,
        title: 'Portrait Photography Series',
        creator: 'Isabella Martinez',
        image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
        likes: 2100,
        category: 'photography',
        isPremium: true
      }
    ],
    resources: [
      {
        id: 1,
        title: 'Social Media Templates Pack',
        creator: 'Design Studio Pro',
        image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
        price: 115000,
        rating: 4.8,
        sales: 1250,
        category: 'templates'
      },
      {
        id: 2,
        title: 'Brand Strategy Workbook',
        creator: 'Marketing Maven',
        image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=400',
        price: 190000,
        rating: 4.9,
        sales: 890,
        category: 'ebooks'
      },
      {
          id: 3,
          title: 'Cinematic LUTs Pack',
          creator: 'Color Grade Co.',
          image: 'https://images.pexels.com/photos/4057663/pexels-photo-4057663.jpeg?auto=compress&cs=tinysrgb&w=400',
          price: 95000,
          rating: 4.7,
          sales: 540,
          category: 'presets'
      }
    ]
  };

  const categories = {
    stream: ['all', 'movie', 'music-video', 'education', 'lifestyle', 'business', 'creative'],
    listen: ['all', 'podcast', 'audio-music', 'business', 'lifestyle', 'education', 'wellness'],
    blog: ['all', 'branding', 'marketing', 'creativity', 'lifestyle'],
    gallery: ['all', 'design', 'photography', 'art', 'fashion'],
    resources: ['all', 'templates', 'ebooks', 'courses', 'presets']
  };

  const tabs = [
    { id: 'stream', label: 'Stream', icon: <Play className="w-5 h-5" /> },
    { id: 'listen', label: 'Listen', icon: <Headphones className="w-5 h-5" /> },
    { id: 'blog', label: 'Blog', icon: <Rss className="w-5 h-5" /> },
    { id: 'gallery', label: 'Gallery', icon: <Image className="w-5 h-5" /> },
    { id: 'resources', label: 'Resources', icon: <ShoppingBag className="w-5 h-5" /> }
  ];

  const handleFollow = (creatorId: string) => {
    if (!user) {
      alert('Please sign up or sign in to follow creators.');
      navigate('/signin');
      return;
    }
    alert('Following creator! You will receive notifications for new content.');
  };

  const handleTip = (creatorId: string) => {
    if (!user) {
      alert('Please sign up or sign in to tip creators.');
      navigate('/signin');
      return;
    }
    alert('Tip feature coming soon! Support your favorite creators.');
  };

  const handleSubscribe = (creatorId: string) => {
    if (!user) {
      alert('Please sign up or sign in to subscribe.');
      navigate('/signin');
      return;
    }
    alert('Premium subscription activated! Enjoy exclusive content.');
  };

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold text-white mb-2">Media</h1>
          <p className="text-gray-300">Discover amazing content from talented creators</p>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 mb-8 glass-effect p-2 rounded-xl w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-rose-500 to-purple-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search content..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 glass-effect rounded-xl border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all"
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <Filter className="text-gray-400 w-5 h-5" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 glass-effect rounded-xl border border-white/20 text-white bg-transparent focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all"
            >
              {categories[activeTab as keyof typeof categories]?.map((category) => (
                <option key={category} value={category} className="bg-gray-800">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mediaContent[activeTab as keyof typeof mediaContent]?.map((item: any) => (
            <div key={item.id} className="glass-effect rounded-2xl overflow-hidden hover-lift group">
              {/* Thumbnail/Image */}
              <div className="relative aspect-video bg-gray-800">
                <img 
                  src={activeTab === 'stream' ? item.thumbnail : activeTab === 'listen' ? item.thumbnail : activeTab === 'blog' ? item.thumbnail : item.image}
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  {activeTab === 'stream' && (
                    <Play className="w-12 h-12 text-white" />
                  )}
                  {activeTab === 'listen' && (
                    <Headphones className="w-12 h-12 text-white" />
                  )}
                  {activeTab === 'blog' && (
                    <Rss className="w-12 h-12 text-white" />
                  )}
                  {activeTab === 'resources' && (
                    <ShoppingBag className="w-12 h-12 text-white" />
                  )}
                </div>

                {/* Premium Badge */}
                {item.isPremium && (
                  <div className="absolute top-2 right-2 px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold rounded-full">
                    PREMIUM
                  </div>
                )}

                {/* Duration/Info */}
                {(activeTab === 'stream' || activeTab === 'listen') && (
                  <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 text-white text-xs rounded">
                    {item.duration}
                  </div>
                )}
                {activeTab === 'blog' && (
                  <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 text-white text-xs rounded">
                    {item.readTime}
                  </div>
                )}
              </div>

              {/* Content Info */}
              <div className="p-4">
                <h3 className="text-white font-semibold mb-2 line-clamp-2">{item.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{item.creator}</p>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  {activeTab === 'stream' && (
                    <>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{item.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span>{item.likes}</span>
                      </div>
                    </>
                  )}
                  {activeTab === 'listen' && (
                    <div className="flex items-center space-x-1">
                      <Play className="w-4 h-4" />
                      <span>{item.plays} plays</span>
                    </div>
                  )}
                  {activeTab === 'blog' && (
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>{Math.floor(Math.random() * 100)}</span>
                    </div>
                  )}
                  {activeTab === 'gallery' && (
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span>{item.likes}</span>
                    </div>
                  )}
                  
                  {activeTab === 'resources' && (
                    <>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span>{item.rating}</span>
                      </div>
                      <div className="text-rose-400 font-bold">UGX {item.price.toLocaleString()}</div>
                    </>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  {activeTab === 'resources' ? (
                    <>
                      <button className="flex-1 py-2 bg-gradient-to-r from-rose-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all text-sm font-medium">
                        Buy Now
                      </button>
                      <button className="p-2 glass-effect text-gray-400 hover:text-white rounded-lg transition-colors">
                        <Download className="w-4 h-4" />
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleFollow(item.creator)}
                        className="flex-1 py-2 bg-gradient-to-r from-rose-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all text-sm font-medium"
                      >
                        Follow
                      </button>
                      <button
                        onClick={() => handleTip(item.creator)}
                        className="p-2 glass-effect text-gray-400 hover:text-white rounded-lg transition-colors"
                      >
                        <Heart className="w-4 h-4" />
                      </button>
                      <button className="p-2 glass-effect text-gray-400 hover:text-white rounded-lg transition-colors">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </>
                  )}
                </div>

                {/* Premium Subscription CTA */}
                {item.isPremium && user?.tier === 'free' && (
                  <div className="mt-3 p-3 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border border-yellow-400/30 rounded-lg">
                    <p className="text-yellow-400 text-xs mb-2">Premium content - Subscribe to unlock</p>
                    <button
                      onClick={() => handleSubscribe(item.creator)}
                      className="w-full py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold rounded"
                    >
                      Subscribe Now
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {mediaContent[activeTab as keyof typeof mediaContent]?.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              {activeTab === 'stream' && <Play className="w-16 h-16 mx-auto mb-4" />}
              {activeTab === 'listen' && <Headphones className="w-16 h-16 mx-auto mb-4" />}
              {activeTab === 'blog' && <Rss className="w-16 h-16 mx-auto mb-4" />}
              {activeTab === 'gallery' && <Image className="w-16 h-16 mx-auto mb-4" />}
              {activeTab === 'resources' && <ShoppingBag className="w-16 h-16 mx-auto mb-4" />}
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No content available</h3>
            <p className="text-gray-400">Check back later for new {activeTab} content!</p>
          </div>
        )}
      </div>
    </div>
  );
}
