
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
            history.push(process.env.PUBLIC_URL + push_target);
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

    defaultTimerInterval = (): void => {
        var timerInterval: any;
        this.SwalAlert.fire({
            title: '잠시만 기다려 주세요.',
            html: '토큰 갱신 중입니다. 반복시 새로고침 해주세요.',
            timer: 2000,
            timerProgressBar: true,
            onBeforeOpen: () => {
              Swal.showLoading()
              timerInterval = setInterval(() => {
                const content = Swal.getContent()
                if (content) {
                  const b: any = content.querySelector('b')
                  if (b) {
                    b.textContent = Swal.getTimerLeft()
                  }
                }
              }, 100)
            },
            onClose: () => {
              clearInterval(timerInterval)
            }
          }).then((result: any) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
              console.log('I was closed by the timer')
            }
          })
    };


    error = (alertOption: alertTypeInterface): void => {
        this.SwalAlert.fire({
            icon: "error",
            text: alertOption.text,
        });
    };

}

export default new GlobalAlert();