// 1. Video class to easily manage video content
class Video {
    constructor(thumbnail, videoSrc, title, channel, views, duration, channelAvatar, description) {
        this.thumbnail = thumbnail;
        this.videoSrc = videoSrc;
        this.title = title;
        this.channel = channel;
        this.views = views;
        this.duration = duration;
        this.channelAvatar = channelAvatar;
        this.description = description;
    }
}

// 2. Create video instances with working video URLs
const video1 = new Video(
    "image.png",
    "videoplayback.mp4",
    "Private Jet Interior Design | Luxury Aviation",
    "Aviation Elite",
    "845K views",
    "18:42",
    "AE",
    "Step inside the world's most luxurious private jets. From custom interiors to state-of-the-art amenities, explore how the elite travel in ultimate comfort and style."
);

const video2 = new Video(
    "https://images.unsplash.com/photo-1601924582970-9238bcb495d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1108&q=80",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    "Mega Yacht Tour 2023 | Ocean Paradise",
    "Luxury Marine",
    "1.2M views",
    "24:15",
    "LM",
    "Embark on an exclusive tour of the world's most magnificent mega yachts. Discover unparalleled luxury on the high seas with helipads, pools, and submarine bays."
);

const video3 = new Video(
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1100&q=80",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "Inside a $50M Beverly Hills Mansion",
    "Prime Properties",
    "2.1M views",
    "32:07",
    "PP",
    "Tour this spectacular $50 million Beverly Hills estate featuring 12 bedrooms, Olympic-sized pool, home theater, and panoramic city views. The epitome of luxury living."
);

const video4 = new Video(
    "https://images.unsplash.com/photo-1542751110-97427bbecf20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1084&q=80",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    "Luxury Watch Collection | Rare Timepieces",
    "Horology Masters",
    "567K views",
    "15:33",
    "HM",
    "Explore an exclusive collection of the world's most prestigious timepieces. From Patek Philippe to Richard Mille, discover watches that are works of art and engineering marvels."
);

const video5 = new Video(
    "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1167&q=80",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    "Michelin Star Dining Experience | World's Best Restaurant",
    "Culinary Excellence",
    "892K views",
    "28:19",
    "CE",
    "Join us for an extraordinary culinary journey at a 3-Michelin star restaurant. Experience world-class cuisine, impeccable service, and dining perfection at its finest."
);

const video6 = new Video(
    "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    "Private Island Resort | Ultimate Luxury Getaway",
    "Exclusive Escapes",
    "1.5M views",
    "36:44",
    "EE",
    "Escape to paradise with a tour of the world's most exclusive private island resorts. From the Maldives to the Caribbean, discover ultimate privacy and luxury."
);

// 3. Add all videos to an array
const videos = [video1, video2, video3, video4, video5, video6];

// 4. Function to generate video cards
function generateVideoCards() {
    const container = document.getElementById('videosContainer');
    
    videos.forEach(video => {
        const videoCard = document.createElement('div');
        videoCard.className = 'video-card';
        
        videoCard.innerHTML = `
            <div class="thumbnail-container">
                <img src="${video.thumbnail}" alt="${video.title}" class="thumbnail">
                <div class="duration">${video.duration}</div>
            </div>
            <div class="video-info">
                <h3 class="video-title">${video.title}</h3>
                <div class="channel-info">
                    <div class="channel-avatar">${video.channelAvatar}</div>
                    <span class="channel-name">${video.channel}</span>
                </div>
                <div class="video-stats">
                    <span>${video.views}</span>
                    <span>•</span>
                    <span>2 weeks ago</span>
                </div>
            </div>
        `;
        
        // 5. Add click event to play video in main player
        videoCard.addEventListener('click', function() {
            const mainVideo = document.querySelector('.video-player');
            const mainVideoSource = mainVideo.querySelector('source');
            
            // Update video source
            mainVideoSource.src = video.videoSrc;
            
            // Update poster
            mainVideo.poster = video.thumbnail;
            
            // Reload video
            mainVideo.load();
            
            // Update video title and details
            document.querySelector('.video-title-large').textContent = video.title;
            document.querySelector('.video-description p').textContent = video.description;
            
            // Update channel info
            document.querySelector('.channel-avatar').textContent = video.channelAvatar;
            document.querySelector('.channel-details h3').textContent = video.channel;
            
            // Scroll to top of video player
            document.querySelector('.video-player-section').scrollIntoView({ behavior: 'smooth' });
        });
        
        container.appendChild(videoCard);
    });
}

// 6. Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    generateVideoCards();
    
    // 7. Add click event to sidebar items
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    sidebarItems.forEach(item => {
        item.addEventListener('click', function() {
            sidebarItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // 8. Add functionality to search bar
    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');
    
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase();
        if (searchTerm) {
            alert(`Searching for: ${searchTerm}`);
            // In a real app, you would filter videos based on search term
        }
    }
    
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // 9. Add functionality to action buttons
    const likeButton = document.querySelector('.action-btn:nth-child(1)');
    let liked = false;
    let likeCount = 12000;
    
    likeButton.addEventListener('click', function() {
        liked = !liked;
        if (liked) {
            likeCount++;
            likeButton.innerHTML = '<i class="fas fa-thumbs-up"></i><span>' + formatCount(likeCount) + '</span>';
            likeButton.style.color = 'var(--accent)';
        } else {
            likeCount--;
            likeButton.innerHTML = '<i class="fas fa-thumbs-up"></i><span>' + formatCount(likeCount) + '</span>';
            likeButton.style.color = 'var(--text-secondary)';
        }
    });
    
    // 10. Add functionality to subscribe button
    const subscribeButton = document.querySelector('.subscribe-btn');
    let subscribed = false;
    
    subscribeButton.addEventListener('click', function() {
        subscribed = !subscribed;
        if (subscribed) {
            subscribeButton.textContent = 'SUBSCRIBED';
            subscribeButton.style.backgroundColor = 'var(--text-secondary)';
        } else {
            subscribeButton.textContent = 'SUBSCRIBE';
            subscribeButton.style.backgroundColor = 'var(--accent)';
        }
    });
});

// Helper function to format large numbers
function formatCount(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num;
}