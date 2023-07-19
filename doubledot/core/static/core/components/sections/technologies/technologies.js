import React from "react"

import "./technologies.css"
import { Section } from "../sub"

export const Technologies=()=>{
    return (
        <Section bg='var(--panel-color)'>
        <section className="technology_container">
            <div className="tech-header">
                <h2 className="title" style={{color:'var(--highlight-color)'}}>Technology Index</h2>
                <p className="description" style={{color:'var(--background-color)'}}>We deliver Solutions with the best Web and Mobile Technologies</p>
            </div>
            <table>
                <tbody className="tech-stacks">
                    {/* WEB */}
                    <tr>
                        <td className="tech-icon"><i class="fas fa-code"></i></td>
                        <td>
                            <h3>Web</h3>
                            <div className='web-stack-container stack-container'>
                                <div className='sub-stack'>
                                    <h4>Backend</h4>
                                    <div className='tech-img-container'>
                                        <div className="img-container">
                                            <img src="static/images/technologies/web/django.png" alt='django'/>
                                        </div>
                                        <div className="img-container">
                                            <img src="static/images/technologies/web/java-logo.svg" alt='django'/>
                                        </div>
                                        <div className="img-container">
                                            <img src="static/images/technologies/web/dot.svg" alt='django'/>
                                        </div>
                                        <div className="img-container">
                                            <img src="static/images/technologies/web/node.png" alt='django'/>
                                        </div>
                                        <div className="img-container">
                                            <img src="static/images/technologies/web/php-logo.svg" alt='django'/>
                                        </div>
                                    </div>
                                </div>
                                <div className='sub-stack'>
                                    <h4>Frontend</h4>
                                    <div className='tech-img-container'>
                                        <div className="img-container">
                                            <img src="static/images/technologies/web/html.svg" alt='html'/>
                                        </div>
                                        <div className="img-container">
                                            <img src="static/images/technologies/web/css.svg" alt='css'/>
                                        </div>
                                        <div className="img-container">
                                            <img src="static/images/technologies/web/javascript-logo.svg" alt='javascript'/>
                                        </div>
                                        <div className="img-container">
                                            <img src="static/images/technologies/web/react.png" alt='django'/>
                                        </div>
                                        <div className="img-container">
                                            <img src="static/images/technologies/mobile/vuejs-logo.svg" alt='django'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    {/* MOBILE */}
                    <tr>
                        <td className="tech-icon"><i class="fas fa-mobile"></i></td>
                        <td>
                            <h3>Mobile</h3>
                            <div className='mobile-stack-container stack-container'>
                                <div className='tech-img-container'>
                                    <div className="img-container">
                                        <img src="static/images/technologies/mobile/android.svg" alt='android'/>
                                    </div>
                                    <div className="img-container">
                                        <img src="static/images/technologies/mobile/react-native-logo.svg" alt='react-native'/>
                                    </div>
                                    <div className="img-container">
                                        <img src="static/images/technologies/mobile/ios-logo.svg" alt='ios'/>
                                    </div>
                                    <div className="img-container">
                                        <img src="static/images/technologies/mobile/flutter-logo.svg" alt='flutter'/>
                                    </div>
                                    <div className="img-container">
                                        <img src="static/images/technologies/mobile/vuejs-logo.svg" alt='vue'/>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    {/* DESKTOP */}
                    <tr>
                        <td className="tech-icon"><i class="fas fa-desktop"></i></td>
                        <td>
                            <h3>Desktop</h3>
                            <div className='desktop-stack-container stack-container'>
                                <div className='tech-img-container'>
                                    <div className="img-container">
                                        <img src="static/images/technologies/desktop/qt.svg" alt='pyqt'/>
                                    </div>
                                    <div className="img-container">
                                        <img src="static/images/technologies/desktop/python_logo.svg" alt='python'/>
                                    </div>
                                    <div className="img-container">
                                        <img src="static/images/technologies/desktop/c-sharp-logo.svg" alt='c-sharp'/>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    {/* DATABASES */}
                    <tr>
                        <td className="tech-icon"><i class="fas fa-database"></i></td>
                        <td>
                            <h3>Databases</h3>
                            <div className='mobile-stack-container stack-container'>
                                <div className='tech-img-container'>
                                    <div className="img-container">
                                        <img src="static/images/technologies/databases/postgresql-logo.svg" alt='postgresql'/>
                                    </div>
                                    <div className="img-container">
                                        <img src="static/images/technologies/databases/ms-sql.svg" alt='microsoft sql'/>
                                    </div>
                                    <div className="img-container">
                                        <img src="static/images/technologies/databases/mysql.svg" alt='mysql'/>
                                    </div>
                                    <div className="img-container">
                                        <img src="static/images/technologies/databases/amazon-s3.svg" alt='amazon s3'/>
                                    </div>
                                    <div className="img-container">
                                        <img src="static/images/technologies/databases/amazon-rds-logo.svg" alt='amazon rds'/>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    {/* CLOUD */}
                    <tr>
                        <td className="tech-icon"><i class="fas fa-cloud"></i></td>
                        <td>
                            <h3>Cloud</h3>
                            <div className='mobile-stack-container stack-container'>
                                <div className='tech-img-container'>
                                    <div className="img-container">
                                        <img src="static/images/technologies/cloud/aws.svg" alt='aws'/>
                                    </div>
                                    <div className="img-container">
                                        <img src="static/images/technologies/cloud/azure-full.svg" alt='azure'/>
                                    </div>
                                    <div className="img-container">
                                        <img src="static/images/technologies/cloud/google-cloud-logo.svg" alt='google'/>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    {/* DEVOPS */}
                    <tr>
                        <td className="tech-icon"><i class="fas fa-timeline"></i></td>
                        <td>  
                            <div className='devop-stack-container stack-container'>
                                <h3>DevOps</h3>
                                <div className='sub-stack'>
                                    <h4>Containerization</h4>
                                    <div className='tech-img-container'>
                                        <div className="img-container">
                                            <img src="static/images/technologies/devop/docker.svg" alt='docker'/>
                                        </div>
                                        <div className="img-container">
                                            <img src="static/images/technologies/devop/kubernetes-logo.svg" alt='kubernetes'/>
                                        </div>
                                        <div className="img-container">
                                            <img src="static/images/technologies/devop/openshift-logo.svg" alt='openshift'/>
                                        </div>
                                    </div>
                                </div>
                                <div className='sub-stack'>
                                    <h4>CI/CD</h4>
                                    <div className='devop-stack-container stack-container'>
                                        <div className='tech-img-container'>
                                            <div className="img-container">
                                                <img src="static/images/technologies/ci-cd/google-developer-tools.svg" alt='jenkins'/>
                                            </div>
                                            <div className="img-container">
                                                <img src="static/images/technologies/ci-cd/gitlab.svg" alt='gitlab'/>
                                            </div>
                                            <div className="img-container">
                                                <img src="static/images/technologies/ci-cd/gitlab-ci-cd-logo.svg" alt='gitlab'/>
                                            </div>
                                            <div className="img-container">
                                                <img src="static/images/technologies/ci-cd/aws-developer-tools.svg" alt='aws developer tool'/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
        </Section>
    )
}