import foto from './image/foto.jpg'
import './App.scss';
import { ReplyIcon, ReteetIcon, LikeIcon, ShareIcon, VerifiedIcon } from './icon'

function App() {
  return (
    <>
      <div className="tweet-settings">
        <h3>Tweet Ayarları</h3>
      </div>
      <div className="tweet-container">
        <div className="tweet">
          <div className="tweet-author">
            <img src={foto} alt="" />
            <div>
              <div className="name">Berkay Gül
                <VerifiedIcon />
              </div>
              <div className="username">@gulberrkay</div>
            </div>
          </div>
          <div className="tweet-content">
            <p>
              Bu tweet fake tweet generator uygulaması için atılmıştır,
              aldırmayınız
              :D
            </p>
          </div>

          <div className="tweet-stats">
            <span>
              <b>24</b> Retweet
            </span>
            <span>
              <b>24</b> Alıntı Tweetler
            </span>
            <span>
              <b>24</b> Beğeni
            </span>
          </div>
          <div className="tweet-actions">
            <span>
              <ReplyIcon />
            </span>
            <span>
              <ReteetIcon />
            </span>
            <span>
              <LikeIcon />
            </span>
            <span>
              <ShareIcon />
            </span>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
