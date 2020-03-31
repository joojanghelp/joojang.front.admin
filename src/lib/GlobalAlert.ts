
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import history from 'routes/History';

interface alertTypeInterface {
    title?: string,
    text?: string | null | undefined,
    html?: string | null | undefined,
    footer?: string,
    push_router?: string,
}

class GlobalAlert {

    SwalAlert: any;
    History: any;

    constructor() {
        this.SwalAlert = withReactContent(Swal);


    }

    default = (alertOption: alertTypeInterface): void => {
        this.SwalAlert.fire({
            text: alertOption.text,
        });
    };


    thenHistoryPush = (alertOption: alertTypeInterface): void => {

        const push_target = alertOption.push_router ? alertOption.push_router : '/';

        this.SwalAlert.fire({
            text: alertOption.text,
        }).then(() => {
            history.push(push_target);
        });
    };

    thenLocationReload = (alertOption: alertTypeInterface): void => {
        this.SwalAlert.fire({
            text: alertOption.text,
        }).then(() => {
            window.location.reload();
        });
    };

    defaultUserInfo = (alertOption: alertTypeInterface): void => {
        this.SwalAlert.fire({
            title: alertOption.title,
            html: alertOption.html,
            cancelButtonText:
              '<i class="fa fa-thumbs-down"></i>',
            cancelButtonAriaLabel: 'Thumbs down'
        });
    };


    error = (alertOption: alertTypeInterface): void => {
        this.SwalAlert.fire({
            icon: "error",
            text: alertOption.text,
        });
    };

}

export default new GlobalAlert();