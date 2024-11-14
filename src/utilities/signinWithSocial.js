import { toast } from "react-toastify";

export const handleSigninWithGoogle = (signinUserWithGoogle) => {
  signinUserWithGoogle()
    .then(() => {
      toast.success("You have successfully sign in");
    })
    .catch((error) => toast.error(error.message));
};
export const handleSigninWithGithub = (signinUserWithGithub) => {
  signinUserWithGithub()
    .then(() => {
      toast.success("You have successfully sign in");
    })
    .catch((error) => toast.error(error.message));
};
export const handleSigninWithTwitter = (signinUserWithTwitter) => {
  signinUserWithTwitter()
    .then(() => {
      toast.success("You have successfully sign in");
    })
    .catch((error) => toast.error(error.message));
};
