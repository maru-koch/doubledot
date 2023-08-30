
import { PageBanner,CustomMobileApp, MobileAppPlatforms, OurApproach } from '../components'

import { Layout } from '../layouts/layout'
import classes from './mobile.module.css'

export const MobileAppDevelopment=()=>{
    /*This component displays the mobile app development page. */
    
    return (
        <Layout>
            <PageBanner page_title={'Custom Mobile App Development'}/>
                <div className={classes.mobile_wrapper}>
                    <CustomMobileApp/>
                    <MobileAppPlatforms/>
                    <OurApproach/>
                </div>
        </Layout>
    )
}