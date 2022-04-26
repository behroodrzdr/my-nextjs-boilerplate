export const postSendOtpMapper = (data: any) => {
    const userData = data?.results;
    const userName = userData?.name
      ? `${userData?.name} ${userData?.family}`
      : undefined;
    return {
      accessToken: data?.access_token,
      user: {
        firstName: userData?.name,
        lastName: userData?.family,
        mobile: userData?.mobile,
        email: userData?.email,
        name: userName ? userName : userData?.mobile,
      },
    };
  };
  