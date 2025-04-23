import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';

/**
 * Custom Redux Hooks
 * 
 * This file provides custom hooks for interacting with the Redux store in a type-safe manner.
 * It replaces the plain `useDispatch` and `useSelector` hooks with typed versions, ensuring
 * that the app's state and dispatch actions are strongly typed.
 * 
 * These hooks should be used throughout the app instead of the plain `useDispatch` and `useSelector`
 * to leverage TypeScript's type-checking and IntelliSense features.
 */

/**
 * useAppDispatch Hook
 * 
 * A custom hook that wraps the `useDispatch` hook from `react-redux` and provides a typed version
 * of the dispatch function. This ensures that all dispatched actions are type-checked against
 * the app's `AppDispatch` type.
 * 
 * @returns The typed `dispatch` function from Redux.
 * 
 * @example
 * // Usage in a component
 * const dispatch = useAppDispatch();
 * dispatch(someActionCreator(payload));
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();

/**
 * useAppSelector Hook
 * 
 * A custom hook that wraps the `useSelector` hook from `react-redux` and provides a typed version
 * of the selector function. This ensures that the selected state is type-checked against the app's
 * `RootState` type.
 * 
 * @typeParam RootState - The type of the app's root state, defined in the Redux store.
 * 
 * @returns A typed version of the `useSelector` hook.
 * 
 * @example
 * // Usage in a component
 * const someState = useAppSelector((state) => state.someSlice.someProperty);
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;