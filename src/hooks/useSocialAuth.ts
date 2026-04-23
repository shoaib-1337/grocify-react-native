import { useSSO } from "@clerk/expo";
import * as Linking from "expo-linking";
import { useState } from "react";
import { Alert } from "react-native";

const useSocialAuth = () => {
  const [loadingStrategy, setLoadingStrategy] = useState<string | null>(null);
  const { startSSOFlow } = useSSO();

  const handleSocialAuth = async (
    strategy: "oauth_google" | "oauth_github" | "oauth_apple",
  ) => {
    if (loadingStrategy) return;
    setLoadingStrategy(strategy);
    try {
      const redirectUrl = Linking.createURL("/sso-callback");
      const { createdSessionId, setActive } = await startSSOFlow({
        strategy,
        redirectUrl,
      });

      if (!createdSessionId || !setActive) {
        Alert.alert(
          "Sign-in incomplete",
          "Sign-in didnot complete. Please Try again",
        );
        return;
      }

      await setActive({ session: createdSessionId });
    } catch (error) {
      console.error("Error in social auth", error);
      Alert.alert("Error", "Failed to SignIn. Please try again");
    } finally {
      setLoadingStrategy(null);
    }
  };
  return { handleSocialAuth, loadingStrategy };
};

export default useSocialAuth;
