import classes from './mobilePlatform.module.css'

export const MobilePlatform=()=>{
    /*A component that displays a mobile app and the various platform
    */
    return (
        <div className={classes.platform_container}>
            <div className={classes.platform_wrapper}>
                <div className={classes.platform_inner}>
                    <div className={`${classes.platform_android} ${classes.platform_allplatforms}`}>
                        <span>Android</span>
                    </div>
                    <div className={`${classes.platform_ios} ${classes.platform_allplatforms}`}>
                        <span>IoS</span>
                    </div>
                    <div  className={classes.platform_ring_dashed}>
                        <div className={classes.platform_main}>
                            <img src={mobileAppImg}/>
                        </div>
                    </div>
                   
                    <div className={`${classes.platform_windows} ${classes.platform_allplatforms}`}>
                        <span>Windows</span>
                    </div>
                    <div className={`${classes.platform_crossplatform} ${classes.platform_allplatforms}`}>
                        <span>Cross Platform</span>
                    </div>
                </div>
            </div>
        </div>
    )
}