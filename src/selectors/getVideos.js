import youtubeApi from '../api/youtube';

export default async function getVideos(term) {
  const response = await youtubeApi.get('/search', {
    params: {
      q: term,
    },
  });
  return {
    videosMetaInfo: response.data.items,
    selectedVideoId: response.data.items[0].id.videoId,
  };
}
