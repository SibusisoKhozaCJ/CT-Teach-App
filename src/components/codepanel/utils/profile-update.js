import * as authFetch from "../../../shared/lib/authorizedFetch";

const profiels = [
  "zrhbaloGSyXHUzruMErxTGKxULz2",
  "yAVwbQjKFaSg2wOt3hAqbA2a4zB3",
  "h1UY7eyGucU7dMT7pIiGiSTaD602",
  "eIFXpdtK8cOxWXMxRamlRsfW61B2",
  "eG712RDNHQchdHOOUqKdbqtqnBF2",
  "dPG1y9ftKdT8882ifWV7rQ69yn82",
  "cPsObwEUExgwJhqoGeEvJUfiofi1",
  "auHetxENOacUCdGlQ2HRXAEN76E2",
  "Y4JbIQCywdaFtZyqW0WNbtboiqF2",
  "X6Vbn5YW2PYbxszZzsj5Z6OWHtL2",
  "VjrNFgEpuAPkXd44IEH6utppiT72",
  "SUyUTTRAnAcyX6uPUGIivJvtAv32",
  "MtJSqHecqEbWlJ5HWRYHhx1x1vt2",
  "B2DKAB0E8nRNEB8xrGGCmUrP26t2",
  "AjgYG3NRMuTmzQL9OKQmSCHRf5S2",
  "AMC6nL4v1KXapjLLpilUJViTwoL2",
  "9gVFGY0jHyeFYZjYBpF5t211L2W2",
  "3jJ6YZNSW6g2UiIGjWGXa5y3rMm1"
];

const lessonId = "5-min-website";

const getProgressData = async (userId, lessonId) => {
  return await authFetch.firebaseGet(
    `user_profile/${userId}/lesson_progress/${lessonId}`
  );
}


const updateOne = (userId) => {
  getProgressData(userId, lessonId).then(data => {
    if(!data) {
      return;
    }
    const newChallenges = [];
    const newData = {};
    if(data.challenges) {
      data.challenges.map(challenge => {
        const newChallenge = {
          progress: challenge.progress,
          validators: challenge.validators.slice(1, challenge.validators.length)
        }
        newChallenges.push(newChallenge);
      })
    }
    newData.last_updated = data.last_updated;
    newData.current_slide = data.current_slide;
    newData.progress = data.progress;
    newData.user_code = data.user_code;
    newData.challanges = newChallenges;
    const resData = {
      "C001": {
        "P001": {
          "T001": newData
        }
      },
      "last_lesson": "C001/P001/T001"
    }

    authFetch.firebaseUpdate(
      `User_profile/${userId}`,
      resData
    );
  })
}

export const updateProfiles = () => {
  profiels.map(profile => {updateOne(profile)})
}
