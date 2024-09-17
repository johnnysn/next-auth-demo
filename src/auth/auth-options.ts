import GithubProvider from "next-auth/providers/github";

const githubProvider = GithubProvider({
  clientId: process.env.GITHUB_ID!,
  clientSecret: process.env.GITHUB_SECRET!,
});

export const authOptions = {
  providers: [githubProvider],
  events: {
    async signIn() {
      console.log("User signed in!");
    },
  },
};
