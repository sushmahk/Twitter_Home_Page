import React from 'react'
import './Widgets.css'
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
} from 'react-twitter-embed'
import SearchIcon from '@material-ui/icons/Search'

function Widgets() {
    return (
        <div className = "widgets">
            <div className = "widgets__input">
                <SearchIcon 
                    className = "widgets__SearchIcon" 
                />
                <input placeholder = "Search Twitter" type = "text" />
            </div>
            <div className = "widgets__widgetContainer">
                <h2>
                    Whats'happening
                </h2>
                <TwitterTweetEmbed tweetId = { "1475293356154630145"} />
                <TwitterTweetEmbed tweetId = {"1475476564850749446"} />
                
                <TwitterTimelineEmbed 
                    sourceType = "profile"
                    screenName = "Pranshi@HK"
                    options = {{ height: 400 }}
                />

                <TwitterShareButton 
                    url = {"https://facebook.com"}
                    options = { { text : "hey" , via :  "Pranshi" }}
               />
            </div>
        </div>
    )
}

export default Widgets
