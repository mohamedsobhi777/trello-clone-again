import { OrganizationProfile } from '@clerk/nextjs'
import React from 'react'

type Props = {}

const SettingsPage = (props: Props) => {
    return (
        <div className='w-full'>
            <OrganizationProfile
                appearance={{
                    elements: {
                        rootBox: {
                            boxShadow: "none",
                            width: "100%",
                        },
                        card: {
                            border: "1px solid #e5e5e5",
                            boxShadow: "none",
                            width: "100%",
                        }
                    }
                }}
            />
        </div>
    )
}

export default SettingsPage