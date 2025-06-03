import React from "react";

const topics = [
    {
        title: "General",
        items: [
            "About forwarding limits",
            "How to update Flowbite?",
            "How to change privacy settings?"
        ]
    },
    {
        title: "License",
        items: [
            "Verifying your number",
            "How to restore your chat history",
            "How to manage your notifications"
        ]
    },
    {
        title: "Refund policy",
        items: [
            "How to restore your chat history",
            "How to use status",
            "How to manage your notifications"
        ]
    },
    {
        title: "Account",
        items: [
            "About WhatsApp Web and Desktop",
            "How to log in or out",
            "How to manage your notifications"
        ]
    }
];

export const Faq = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-4">How can we help you?</h1>
                <p className="text-gray-400 mb-6">
                    Here are a few of the questions we get the most. If you don't see what's on your mind, reach out to us anytime on phone, chat, or email.
                </p>
                <input
                    type="text"
                    placeholder="Type keywords to find answers"
                    className="w-full max-w-xl mx-auto mb-10 px-4 py-3 rounded-md bg-gray-800 placeholder-gray-500"
                />
                <p className="text-gray-400 mb-8">
                    You can also browse the topics below to find what you are looking for.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {topics.map((topic, index) => (
                        <div key={index} className="bg-gray-800 p-6 rounded-lg">
                            <div className="flex items-center mb-3">
                                <div className="w-6 h-6 bg-blue-500 rounded mr-3" />
                                <h3 className="text-lg font-semibold">{topic.title}</h3>
                            </div>
                            <ul className="text-sm text-gray-300 space-y-1">
                                {topic.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                            <a href="#" className="text-blue-400 text-sm mt-2 inline-block">
                                See all
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
