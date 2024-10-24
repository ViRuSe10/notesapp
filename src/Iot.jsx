
import { fetchAuthSession } from 'aws-amplify/auth';

// Apply plugin with configuration

function Authentication(){
  fetchAuthSession().then((info) => {
      const cognitoIdentityId = info.identityId;
      console.log(cognitoIdentityId)
    });

  return (
    <div>
      <button onClick={fetchAuthSession}>Get Id</button>
    </div>
  );
}

export default Authentication;