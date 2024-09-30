'use client'
import React from 'react'
import CubeMagic from './CubeMagic'
import MultipleTyped from './MultipleTyped'
import Image from 'next/image'

export default function Header() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-sky-300 to-sky-600 flex flex-col relative overflow-hidden">
          <header className="w-full p-4 bg-red-600">
            <div className="container mx-auto flex justify-between items-center">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <nav>
                <ul className="flex space-x-4 text-white">
                  <li><a href="#" className="hover:underline">Home</a></li>
                  <li><a href="#" className="hover:underline">About</a></li>
                  <li><a href="#" className="hover:underline">Contact</a></li>
                </ul>
              </nav>
            </div>
          </header>
    
          <main className="flex-grow flex justify-center items-center p-4">
            <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto">
              <section className="text-center md:text-left md:w-1/2 space-y-6">
                <h3 className="text-4xl md:text-6xl font-bold text-yellow-300 shadow-sm" style={{
                  fontFamily: "'Press Start 2P', cursive",
                  textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000'
                }}>
                  SUPER MARIO TITLE
                </h3>
                <div className="text-xl md:text-2xl text-white">
                  <MultipleTyped />
                </div>
                <p className="text-lg text-white">
                  Welcome to the Mushroom Kingdom! Embark on an epic adventure filled with power-ups, challenges, and fun!
                </p>
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105">
                  Start Adventure!
                </button>
              </section>
    
              <div className="md:w-1/2  mt-8 md:mt-0">
                <CubeMagic/>
              </div>
            </div>
          </main>
        </div>
      )
    }