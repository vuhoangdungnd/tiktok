import * as httpRequest from '../utils/httpRequest';

export const like = async (token, id_user, id_video) => {
    try {
        const res = await httpRequest.post(
            `/user/likeVideo`,
            {
                id_user,
                id_video,
            },
            {
                headers: { Authorization: 'Bearer ' + token },
            },
        );
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const unlike = async (token, id_user, id_video) => {
    try {
        const res = await httpRequest.post(
            `/user/unlikeVideo`,
            {
                id_user,
                id_video,
            },
            {
                headers: { Authorization: 'Bearer ' + token },
            },
        );
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const download = async (id_video) => {
    try {
        const res = await httpRequest.post(`/download`, {
            id_video,
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const share = async (id_video) => {
    try {
        const res = await httpRequest.post(`/share`, {
            id_video,
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
