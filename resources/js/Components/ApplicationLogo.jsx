export default function ApplicationLogo({width = 400, ...props}) {
    return (
        <img src="/img/logo-no-background.png" alt="" style={{width}} {...props} />
    );
}
