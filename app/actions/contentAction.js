import axios from 'axios'
// ==========================================================
//getAllContents
// ==========================================================
export function getAllContents() {
    var url = "http://api.openweathermap.org/data/2.5/find?lat=23.68&lon=90.35&cnt=50&appid=e384f9ac095b2109c751d95296f8ea76"
    return dispatch => {
        var config = {
            headers: {
                ContentType: 'application/json',
                Authorization: "Basic c291cmF2OjEyMzQ="
            }
        };
        axios
            .get(url, config)
            .then(function (response) {
                dispatch({
                    type: "GET_ALL_CONTENTS",
                    payload: {
                        getAllContents: response.data
                    }
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    };
}
// ==========================================================
//select one content
// ==========================================================
export function selectOneItem(item, callback){
    return dispatch => {
                dispatch({
                    type: "SELECT_ONE_ITEM",
                    payload: {
                        selectItem: item
                    }
                })
                callback()
            }
    }

