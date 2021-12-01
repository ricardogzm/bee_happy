import { useUser } from "hooks/useUser";
import { createContext, ReactNode, useMemo } from "react";

type UserHookType = ReturnType<typeof useUser>;

export const UserContext = createContext<UserHookType>({} as UserHookType);

interface Props {
  children: ReactNode;
}

export const UserProvider = ({ children }: Props) => {
  const { data, error, mutate } = useUser();

  const userMemo = useMemo(
    () => ({ data, error, mutate }),
    [data, error, mutate]
  );

  return (
    <UserContext.Provider value={userMemo}>{children}</UserContext.Provider>
  );
};
