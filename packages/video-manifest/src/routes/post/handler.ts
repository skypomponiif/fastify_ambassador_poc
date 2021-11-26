import { VideoManifestResponse } from 'interfaces';
import { hlsUrl } from '../constants';

export const videoManifestHandler = async (): Promise<VideoManifestResponse> => {
    return { hlsUrl: hlsUrl };
};

export default videoManifestHandler;
