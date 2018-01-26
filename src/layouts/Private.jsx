import React from 'react'
import ProfileSidebar from '../components/ProfileSidebar'

export default function PrivateLayout({children}) {
    return (
      <ProfileSidebar>
        {children}
      </ProfileSidebar>
    )
}