import React from 'react'
import { Navbar } from '../components/Navbar'
import { HeroSection } from '../components/HeroSection'
import { AboutSection } from '../components/AboutSection'
import { SkillsSection } from '../components/SkillSection'
import { ContactSection } from '../components/ContactSection'
import { Footer } from '../components/Footer'
import { ProjectsSection } from '../components/ProjectSection'
import { SocialSidebar } from '../components/SocialSidebar'
import { EmailSidebar } from '../components/EmailSidebar'

const Home = () => {
    return (

        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

            <SocialSidebar />
            <EmailSidebar />
            <Navbar />
            <main>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <ContactSection />
            </main>

            <Footer />

        </div>
    )
}

export default Home