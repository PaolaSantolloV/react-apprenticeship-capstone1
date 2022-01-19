import { useEffect, useReducer } from 'react';
import getVideos from '../selectors/getVideos';
import { useGlobalContext } from '../providers/Global.provider';

export const useFetch = () => {
  const { state, handleSaveResult } = useGlobalContext();

  const initialState = {
    isVideos: Boolean(state.searchResult.lenght),
    isChannel: false,
    error: false,
  };

  function reducer(fetchState, action) {
    switch (action.type) {
      case 'videos':
        return {
          ...fetchState,
          isVideos: action.payload,
        };
      case 'channel':
        return {
          ...fetchState,
          isChannel: action.payload,
        };
      case 'error':
        return {
          ...fetchState,
          error: action.payload,
        };

      default:
        throw new Error();
    }
  }

  const [fetchState, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (fetchState.isVideos === false) {
      getVideos(state.searchTerm)
        .then((result) => {
          handleSaveResult(result);
          dispatch({
            type: 'videos',
            payload: true,
          });
          if (result.videosMetaInfo[0].id.channelId) {
            dispatch({
              type: 'channel',
              payload: true,
            });
          }
        })
        .catch((error) => {
          dispatch({
            type: 'error',
            payload: error,
          });
          dispatch({
            type: 'videos',
            payload: false,
          });
        });
    } else if (state.searchResult.videosMetaInfo[0].id.channelId) {
      dispatch({
        type: 'channel',
        payload: true,
      });
    } else {
      dispatch({
        type: 'channel',
        payload: false,
      });
    }
  }, [
    fetchState.isVideos,
    handleSaveResult,
    state.searchResult.videosMetaInfo,
    state.searchTerm,
  ]);

  return fetchState;
};
