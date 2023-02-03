import profilePic from '../../images/profile.png';



export const Tweet = ({profile,tweetText}) => {
    return (
        <div style={{display:'flex',alignItems: 'center', border: '1px solid #0B2239', borderRadius:'12px',marginBottom: '8px',paddingRight:'16px'}}>
            <div style={{flex:'1'}}>
                <img src={profile} />
            </div>
            <div style={{flex:'4'}}>
                <p>{tweetText}</p>
            </div>
        </div>
    );
}