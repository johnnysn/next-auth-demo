import GithubProvider from "next-auth/providers/github";

const githubProvider = GithubProvider({
  clientId: process.env.GITHUB_ID!,
  clientSecret: process.env.GITHUB_SECRET!,
});

const springOAuthProvider = {
  id: "spring",
  name: "Spring Auth Server",
  type: "oauth",
  version: "2.0",
  authorization: "http://localhost:9000/oauth2/authorize",
  token: "http://localhost:9000/oauth2/token",
  userinfo: "http://localhost:9000/userinfo",
  clientId: process.env.SPRING_CLIENT_ID,
  clientSecret: process.env.SPRING_CLIENT_SECRET,
  clientAuthMethod: "client_secret_basic",
  redirectUri: "http://localhost:3000/api/auth/callback",
  scope: "openid email",
  idToken: true,
  issuer: "http://localhost:9000",
  // jwks_endpoint: 'http://localhost:9000/oauth2/jwks',
  wellKnown: "http://localhost:9000/.well-known/openid-configuration",
  profile: (profile: any) => {
    console.log("profile", profile);
    return {
      id: profile.user.id.toString(),
      name: profile.user.username,
      email: profile.user.email,
    };
  },
};

export const authOptions = {
  providers: [githubProvider, springOAuthProvider],
  events: {
    async signIn() {
      console.log("User signed in!");
    },
  },
};
