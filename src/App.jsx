//import foto from './image/foto.jpg'
import './App.scss';
import { ReplyIcon, ReteetIcon, LikeIcon, ShareIcon, VerifiedIcon } from './icon'
import { useState,createRef ,useEffect} from 'react';
import {AvatarLoader} from './loaders';
import { useScreenshot } from 'use-react-screenshot';


function App() {


  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [isVerified, setIsVerified] = useState(0);
  const [tweet, setTweet] = useState();
  const [avatar, setAvatar] = useState();
  const [retweets, setRetweets] = useState(0);
  const [quoteTweets, setQuoteTweets] = useState(0);
  const [likes, setLikes] = useState(0);

  const [image, takeScreenshot] = useScreenshot();
  const getImage = () => takeScreenshot(Tweetref.current);
  const Tweetref = createRef(null)


  useEffect(()=> {
    console.log(image)
  },[image]);


  const avatarHandle = (e) =>{
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.addEventListener('load',function(){
      setAvatar(this.result);
    });
    reader.readAsDataURL(file);
  };

  const tweetFormat = (tweet)=>{
    tweet = tweet
    .replace(/@([\w]+)/g,'<span>@$1</span>')
    .replace(/#([\wşçöğüıİ]+)/gi, '<span>#$1</span>')
    .replace(/(https?:\/\/[\w\.\/]+)/, '<span>$1</span>')

    return tweet;
  }

  const formatNumber = (number)=>{
    if(!number){
      number = 0;
    }
    if(number<1000){
      return number;
    }else{
      number /= 1000;
      number = String(number).split('.')
      return number[0] + (number[1] > 100 ? ',' + number[1].slice(0,1) + 'B' : '');
    }
    
  }

  return (
    <>
      <div className="tweet-settings">
        <h3>Tweet Ayarları</h3>
        <ul>
          <li>
            <label >Ad Soyad</label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              className='input'
              type="text"
              
            />
          </li>
          <li>
          <label >Kullanıcı Adı</label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              className='input'
              type="text"
            />
          </li>
          <li>
          <label >Tweet</label>
            <textarea 
            className='textarea'
            value={tweet} 
            onChange={(e)=>setTweet(e.target.value)}

            />

          </li>
          <li>
          <label >Avatar</label>
            <input 
            type='file'
            className='input'
            onChange={avatarHandle}
            />

          </li>
          <li>
          <label >Reteets</label>
            <input
              onChange={(e) => setRetweets(e.target.value)}
              value={retweets}
              className='input'
              type="number"
              
            />
          </li>
          <li>
          <label >Alıntı Tweetler</label>
            <input
              onChange={(e) => setQuoteTweets(e.target.value)}
              value={quoteTweets}
              className='input'
              type="number"
            />
          </li>
          <li>
          <label >Begeni</label>
            <input
              onChange={(e) => setLikes(e.target.value)}
              value={likes}
              className='input'
              type="number"
      
            />
          </li>
          <li>
          <label >Dogrulanmis Hesap</label>
            <select onChange={e=> setIsVerified(e.target.value)} defaultValue={isVerified}>
              <option value="1">Evet</option>
              <option value="0">Hayır</option>
            </select>
          </li>
          
          <button onClick={getImage}>Olustur</button>
          <div className="download-url">
            {image && 
            (<a href={image} download='tweet.png'>Tweeti İndir</a>
            )}
          </div>
        </ul>
      </div>


      <div className="tweet-container">
        <div className="tweet" ref={Tweetref}>
          <div className="tweet-author">
            {(avatar && <img src={avatar} />) || <AvatarLoader/> }
            <div>
              <div className="name">{name || 'Ad soyad'}
                {isVerified == 1 && <VerifiedIcon />}
              </div>
              <div className="username">
                @{username || 'username'}
              </div>
            </div>
          </div>
          <div className="tweet-content">
            <p 
            dangerouslySetInnerHTML={{
              __html: 
                 (tweet && tweetFormat(tweet)) || 'bu alana örnek tweet gelicek'
            }}
            />
             
            
          </div>

          <div className="tweet-stats">
            <span>
              <b>{formatNumber(retweets)}</b> Retweet
            </span>
            <span>
              <b>{formatNumber(quoteTweets)}</b> Alıntı Tweetler
            </span>
            <span>
              <b>{formatNumber(likes)}</b> Beğeni
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
