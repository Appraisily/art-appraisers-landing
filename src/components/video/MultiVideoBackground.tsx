import React, { useState, useEffect, useRef } from 'react';

interface MultiVideoBackgroundProps {
  videoUrls: string[];
  fallbackImage?: string;
  opacity?: number;
  contrast?: number;
  brightness?: number;
  transitionDuration?: number;
}

const MultiVideoBackground: React.FC<MultiVideoBackgroundProps> = ({
  videoUrls,
  fallbackImage = '',
  opacity = 0.3,
  contrast = 1.2,
  brightness = 1.2,
  transitionDuration = 2000
}) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [nextVideoIndex, setNextVideoIndex] = useState(1);
  const [isCurrentVideoPlaying, setIsCurrentVideoPlaying] = useState(false);
  const [isNextVideoLoaded, setIsNextVideoLoaded] = useState(false);
  const [isFadingIn, setIsFadingIn] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [preloadedVideos, setPreloadedVideos] = useState<Set<number>>(new Set([0, 1]));
  
  const currentVideoRef = useRef<HTMLVideoElement>(null);
  const nextVideoRef = useRef<HTMLVideoElement>(null);
  const videoContainer = useRef<HTMLDivElement>(null);
  const preloadRefs = useRef<HTMLLinkElement[]>([]);
  
  const videoStyle = {
    filter: `contrast(${contrast}) brightness(${brightness})`,
    opacity: opacity
  };

  // Create prefetch links for all videos
  useEffect(() => {
    // Add prefetch link elements for all videos
    if (videoUrls.length > 0 && typeof document !== 'undefined') {
      videoUrls.forEach((url, index) => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.as = 'video';
        link.href = url;
        document.head.appendChild(link);
        preloadRefs.current.push(link);
      });
    }

    return () => {
      // Clean up prefetch links on unmount
      preloadRefs.current.forEach(link => {
        if (link && link.parentNode) {
          link.parentNode.removeChild(link);
        }
      });
    };
  }, [videoUrls]);

  // Helper function to play video with fallback
  const playVideo = async (videoElement: HTMLVideoElement) => {
    try {
      await videoElement.play();
    } catch (err) {
      console.error('Error playing video:', err);
      
      // Fallback: try playing on user interaction
      const handleUserInteraction = () => {
        videoElement.play().catch(e => console.error('Still cannot play:', e));
        
        // Remove event listeners after first interaction
        document.removeEventListener('click', handleUserInteraction);
        document.removeEventListener('touchstart', handleUserInteraction);
      };
      
      document.addEventListener('click', handleUserInteraction);
      document.addEventListener('touchstart', handleUserInteraction);
    }
  };

  // Helper function to preload a video
  const preloadVideo = (index: number) => {
    if (preloadedVideos.has(index) || index >= videoUrls.length) return;
    
    const tempVideo = document.createElement('video');
    tempVideo.preload = 'auto';
    tempVideo.src = videoUrls[index];
    tempVideo.muted = true;
    tempVideo.load();
    
    // Update preloaded videos set
    setPreloadedVideos(prev => new Set([...prev, index]));
  };

  // Set up the initial video and preload next videos
  useEffect(() => {
    if (!videoUrls.length) return;
    
    // Determine if we can autoplay videos
    const canAutoplay = () => {
      return new Promise<boolean>((resolve) => {
        // Create a test video element
        const video = document.createElement('video');
        video.muted = true;
        video.playsInline = true;
        video.src = 'data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAA7RtZGF0AAACrgYF//+q3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0OCByMjYwMSBhMGNkN2QzIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxOCAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTMgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MzoweDExMyBtZT1oZXggc3VibWU9NyBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0xIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MSA4eDhkY3Q9MSBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0tMiB0aHJlYWRzPTMgbG9va2FoZWFkX3RocmVhZHM9MSBzbGljZWRfdGhyZWFkcz0wIG5yPTAgZGVjaW1hdGU9MSBpbnRlcmxhY2VkPTAgYmx1cmF5X2NvbXBhdD0wIGNvbnN0cmFpbmVkX2ludHJhPTAgYmZyYW1lcz0zIGJfcHlyYW1pZD0yIGJfYWRhcHQ9MSBiX2JpYXM9MCBkaXJlY3Q9MSB3ZWlnaHRiPTEgb3Blbl9nb3A9MCB3ZWlnaHRwPTIga2V5aW50PWluZmluaXRlIGtleWludF9taW49Mjkgc2NlbmVjdXQ9NDAgaW50cmFfcmVmcmVzaD0wIHJjX2xvb2thaGVhZD00MCByYz1jcmYgbWJ0cmVlPTEgY3JmPTIzLjAgcWNvbXA9MC42MCBxcG1pbj0wIHFwbWF4PTY5IHFwc3RlcD00IGlwX3JhdGlvPTEuNDAgYXE9MToxLjAwAIAAABJBZYiEAD//8m+P5OXfBeLGOfKE3xQdDyu/+T3/Vv4sPrjxXKgAAAMAAAMAh4MAVoDkzSIAABFJJbIEBfgAC7AmAAAMAAADAAADAAADAAADAAADAAADAAADDw8PMAQC8AAMDJwAEzAAEzAA4AAAAwAAAwAAAwAAAwAAAwAAHwDwxoBUQQ3MZBiAAMAAAAMAANMv4+4Z/QADAADsAAwMcAAB4P7wAAMAAAMAAAwAIMAAAMAFXG6AAAAMAMLgAADACBwAAMAA4AAAAwAAAwAAAwAAAwAAAwAAH8AAEAQLbIEBf8QAAMAKXgAAMAAAMALXkTJCbAAAAMAAywAAGAEBaHgB+BOfbTBTMeBcIAAAAwAAA8AFEAAAAwDLgBsIAA8AIHAAAAMALfAEzAA3BVaMwfMGACIMAC';
        
        // Try to play the video
        const playPromise = video.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              resolve(true);
            })
            .catch(() => {
              resolve(false);
            });
        } else {
          resolve(false);
        }
      });
    };
    
    // Function to initialize videos
    const initializeVideos = async () => {
      const autoplaySupported = await canAutoplay();
      
      // Set initial video source
      if (currentVideoRef.current) {
        currentVideoRef.current.src = videoUrls[currentVideoIndex];
        currentVideoRef.current.load();
        
        if (autoplaySupported) {
          // We'll let the loadeddata event handler play the video
        } else {
          console.log('Autoplay not supported. Will play on user interaction.');
        }
      }
      
      // Set next video source
      if (nextVideoRef.current && videoUrls.length > 1) {
        nextVideoRef.current.src = videoUrls[nextVideoIndex];
        nextVideoRef.current.load();
      }
      
      // Preload other videos
      for (let i = 2; i < Math.min(videoUrls.length, 5); i++) {
        preloadVideo(i);
      }
    };
    
    initializeVideos();
  }, [videoUrls, currentVideoIndex, nextVideoIndex]);

  // Handle current video events
  useEffect(() => {
    const currentVideo = currentVideoRef.current;
    if (!currentVideo) return;
    
    const onLoadedData = () => {
      playVideo(currentVideo);
    };
    
    const onPlaying = () => {
      setIsCurrentVideoPlaying(true);
      setIsFadingIn(true);
      setTimeout(() => setIsFadingIn(false), transitionDuration);
    };
    
    const onTimeUpdate = () => {
      // Start transition to next video when current video is near its end (80% complete)
      if (currentVideo.duration > 0 && 
          currentVideo.currentTime > currentVideo.duration * 0.8 && 
          !isFadingOut) {
        setIsFadingOut(true);
        
        // Prepare and switch to next video
        setTimeout(() => {
          const newCurrentIndex = nextVideoIndex;
          const newNextIndex = (nextVideoIndex + 1) % videoUrls.length;
          
          setCurrentVideoIndex(newCurrentIndex);
          setNextVideoIndex(newNextIndex);
          setIsCurrentVideoPlaying(false);
          setIsNextVideoLoaded(false);
          setIsFadingOut(false);
          
          // Prepare next video in the sequence
          if (nextVideoRef.current) {
            nextVideoRef.current.src = videoUrls[newNextIndex];
            nextVideoRef.current.load();
          }
          
          // Preload video after next one
          preloadVideo((newNextIndex + 1) % videoUrls.length);
        }, transitionDuration);
      }
    };
    
    const onEnded = () => {
      if (videoUrls.length <= 1) {
        // If only one video, just loop it
        currentVideo.currentTime = 0;
        playVideo(currentVideo);
      }
      // Otherwise the timeupdate handler will take care of transitioning
    };
    
    const onError = (e: Event) => {
      console.error('Video error:', e);
      // If there's an error, try next video
      if (videoUrls.length > 1) {
        setIsFadingOut(true);
        
        setTimeout(() => {
          const newCurrentIndex = nextVideoIndex;
          const newNextIndex = (nextVideoIndex + 1) % videoUrls.length;
          
          setCurrentVideoIndex(newCurrentIndex);
          setNextVideoIndex(newNextIndex);
          setIsCurrentVideoPlaying(false);
          setIsNextVideoLoaded(false);
          setIsFadingOut(false);
          
          // Try next video
          if (nextVideoRef.current) {
            nextVideoRef.current.src = videoUrls[newNextIndex];
            nextVideoRef.current.load();
          }
        }, transitionDuration);
      }
    };
    
    // Add event listeners
    currentVideo.addEventListener('loadeddata', onLoadedData);
    currentVideo.addEventListener('playing', onPlaying);
    currentVideo.addEventListener('timeupdate', onTimeUpdate);
    currentVideo.addEventListener('ended', onEnded);
    currentVideo.addEventListener('error', onError);
    
    return () => {
      // Clean up event listeners
      currentVideo.removeEventListener('loadeddata', onLoadedData);
      currentVideo.removeEventListener('playing', onPlaying);
      currentVideo.removeEventListener('timeupdate', onTimeUpdate);
      currentVideo.removeEventListener('ended', onEnded);
      currentVideo.removeEventListener('error', onError);
    };
  }, [currentVideoIndex, nextVideoIndex, videoUrls, transitionDuration, isFadingOut]);

  // Handle next video events
  useEffect(() => {
    const nextVideo = nextVideoRef.current;
    if (!nextVideo) return;
    
    const onLoadedData = () => {
      setIsNextVideoLoaded(true);
    };
    
    const onError = () => {
      console.error('Error loading next video:', videoUrls[nextVideoIndex]);
    };
    
    nextVideo.addEventListener('loadeddata', onLoadedData);
    nextVideo.addEventListener('error', onError);
    
    return () => {
      nextVideo.removeEventListener('loadeddata', onLoadedData);
      nextVideo.removeEventListener('error', onError);
    };
  }, [nextVideoIndex, videoUrls]);

  const transitionStyle = {
    transition: `opacity ${transitionDuration}ms ease-in-out`
  };

  return (
    <div ref={videoContainer} className="absolute inset-0 overflow-hidden">
      {/* Add video preload links */}
      {videoUrls.map((url, i) => (
        <link key={i} rel="preload" as="video" href={url} />
      ))}
      
      {fallbackImage && (
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${isCurrentVideoPlaying ? 'opacity-0' : 'opacity-100'}`}
          style={{ backgroundImage: `url(${fallbackImage})` }}
        />
      )}
      
      <video
        ref={currentVideoRef}
        className={`absolute inset-0 w-full h-full object-cover ${isFadingIn ? 'opacity-100' : isFadingOut ? 'opacity-0' : 'opacity-100'}`}
        style={{...videoStyle, ...transitionStyle}}
        muted
        playsInline
        preload="auto"
      />
      
      {videoUrls.length > 1 && (
        <video
          ref={nextVideoRef}
          className="hidden"
          muted
          playsInline
          preload="auto"
        />
      )}
      
      {/* Overlay layer for additional contrast/darkening if needed */}
      <div className="absolute inset-0 bg-black opacity-30 pointer-events-none" />
    </div>
  );
};

export default MultiVideoBackground; 