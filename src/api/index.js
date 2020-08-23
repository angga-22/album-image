import axios from 'axios';

const baseUrl = "http://localhost:8888";

export const putPhotos = (data) => {
    return axios({
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
        },
        url: `${baseUrl}/photos`,
        data: data
    })
}

export const getPhotos = (Album, FileName, data) => {
    return axios({
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
        url: `${baseUrl}/photos/${Album}/${FileName}`,
        data: data
    })
}

export const postPhotos = (skip, limit) => {
    return axios({
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: `${baseUrl}/photos/list`,
        data: {
            skip: skip,
            limit: limit
        }
    })
}

export const delPhoto = (Album, FileName) => {
    return axios({
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: `${baseUrl}/photos/${Album}/${FileName}`,
    })
}


export const delPhotos = data => {
    return axios({
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: `${baseUrl}/photos`,
        data: data
    })
}