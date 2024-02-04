import React, { useState } from 'react';
import '../css/LandingPage.css';

function LandingPage() {
    const [rtspUrl, setRtspUrl] = useState('');
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        setIsPlaying(true);
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
                    Welcome to the Livestream
                </h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <div className="flex items-center justify-between">
                        <div className="w-3/4">
                            <label htmlFor="rtsp_url" className="block text-sm font-medium text-gray-700">
                                RTSP URL
                            </label>
                            <input
                                type="text"
                                name="rtsp_url"
                                id="rtsp_url"
                                value={rtspUrl}
                                onChange={(e) => setRtspUrl(e.target.value)}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                                placeholder="Enter RTSP URL"
                            />
                        </div>
                        <div className="w-1/4 ml-4">
                            <button
                                onClick={handlePlay}
                                type="button"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Play
                            </button>
                        </div>
                    </div>
                    <div className="mt-6">
                        {isPlaying && (
                            <div className="video-container">
                                <video controls autoPlay className="max-w-full">
                                    <source src={rtspUrl} type="application/x-rtsp"/>
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
