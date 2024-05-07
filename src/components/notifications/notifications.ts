import toastr from 'toastr';


export function notificationSuccess(props: any) {
    toastr.success(`${props} succesfully`);
}
export function notificationError(props: any) {
    toastr.error(`Failed to ${props}`);
}
export function notificationInfo() {
    toastr.info('Request sent');
}
export function greeting(props: any) {
    toastr.info(`User logged in:<br> ${props}`);
}

