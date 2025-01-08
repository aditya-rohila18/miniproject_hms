import React from 'react'
import logo from '../../assets/logo.svg'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src={logo}
                            alt="Hospital Management System"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            A Comprehensive Solution for Efficient Hospital Management
                        </h2>
                        <p className="mt-6 text-gray-600">
                            Our Hospital Management System aims to streamline hospital operations by simplifying administrative tasks, improving patient care, and optimizing the management of resources. The system is designed to ensure smooth coordination between departments and improve communication within the hospital.
                        </p>
                        <p className="mt-4 text-gray-600">
                            Built with React and modern web technologies, our system features an intuitive user interface that allows healthcare professionals to access patient records, schedule appointments, and manage medical histories with ease. The goal is to create a secure, efficient, and user-friendly platform that enhances both the patient and staff experience.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}