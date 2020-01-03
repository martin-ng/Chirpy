import User from "../../models/User";
import { reqAuth } from "../../services/auth";

export default {
  signup: async (_, { fullName, ...rest }) => {
    const [firstName, lastName] = fullName.split(" ");

    try {
      const user = await User.create({ firstName, lastName, ...rest });
      return {
        token: user.createToken()
      };
    } catch (error) {
      throw error;
    }
  },

  login: async (_, { email, password }) => {
    const user = await User.findOne({ email });
    try {
      if (!user) {
        throw new Error("This user does not exist!");
      }
      if (!user.authUser(password)) {
        throw new Error("Password does not match!");
      }
      return {
        token: user.createToken()
      };
    } catch (error) {
      throw error;
    }
  },

  me: async (_, args, { user }) => {
    try {
      await reqAuth(user);
      return User.findById(user._id);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
};
