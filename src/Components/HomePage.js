import { TweetBox } from "./Tweet/TweetBox";
import { TweetList } from "./Tweet/TweetList";

export const HomePage = () => {
    return (
        <div className="homePage">
            <TweetBox/>
            <TweetList/>
        </div>
    );
}