import axios from "axios";
import { type } from "os";

// For more info, check https://www.netlify.com/docs/functions/#javascript-lambda-functions
export function handler(event, context, callback) {
    let getData = JSON.parse(event.body);

    axios({
        method: "post",
        url: getData.getFormUrl,
        // url: formUrl,
        data: getData.formData,
    })
        .then((r) => {
            console.log("form response", r);
            return r;
        })
        .catch((err) => {
            console.log("error", err);
            return err;
        });

    // fetch(data.getFormUrl, {
    //     method: "POST",
    //     body: data.formData,
    // })
    //     .then((response) => console.log("response", response))
    //     .catch((error) => console.log("error", error));

    callback(null, {
        statusCode: 200,
        // That's the status code which will be returned when the function is executed to indicates that everything is OK
        body: JSON.stringify({
            msg: "Hello, wor! ",
            event: event,
        }),
    });
}
