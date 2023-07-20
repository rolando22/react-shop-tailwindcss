import { useContext } from "react";
import { UserContext } from "../Context/User";

export function useUserContext() {
    const userContext = useContext(UserContext);

    if (userContext === undefined) throw new Error('useUser debe usarse dentro de un UserProvider');

    return userContext;
}
