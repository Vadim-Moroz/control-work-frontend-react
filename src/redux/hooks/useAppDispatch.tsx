import {useDispatch} from "react-redux";
import {store} from "../../slices/store.tsx";

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();