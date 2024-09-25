// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState('stats');
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const handleAccordionToggle = (accordionId) => {
    setActiveAccordion(activeAccordion === accordionId ? null : accordionId);
  };

  return (
    <div className = "bg-transparent\
    
    
    
  bg-black">
    <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">Select tab</label>
        <select
          id="tabs"
          className="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) => handleTabChange(e.target.value)}
          value={activeTab}
        >
          <option value="stats">Statistics</option>
          <option value="about">Services</option>
          <option value="faq">FAQ</option> 
        </select>
      </div>
      <ul className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400 rtl:divide-x-reverse" role="tablist">
        <li className="w-full">
          <button
            type="button"
            role="tab"
            aria-controls="stats"
            aria-selected={activeTab === 'stats'}
            className={`inline-block w-full p-4 rounded-ss-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 ${activeTab === 'stats' ? 'bg-gray-100 dark:bg-gray-600' : ''}`}
            onClick={() => handleTabChange('stats')}
          >
            Statistics
          </button>
        </li>
        <li className="w-full">
          <button
            type="button"
            role="tab"
            aria-controls="about"
            aria-selected={activeTab === 'about'}
            className={`inline-block w-full p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 ${activeTab === 'about' ? 'bg-gray-100 dark:bg-gray-600' : ''}`}
            onClick={() => handleTabChange('about')}
          >
            Services
          </button>
        </li>
        <li className="w-full">
          <button
            type="button"
            role="tab"
            aria-controls="faq"
            aria-selected={activeTab === 'faq'}
            className={`inline-block w-full p-4 rounded-se-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 ${activeTab === 'faq' ? 'bg-gray-100 dark:bg-gray-600' : ''}`}
            onClick={() => handleTabChange('faq')}
          >
            FAQ
          </button>
        </li>
      </ul>
      <div id="fullWidthTabContent" className="border-t border-gray-200 dark:border-gray-600">
        {activeTab === 'stats' && (
          <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800">
            <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
              {/* Statistics */}
              {[
                { label: 'Developers', value: '73M+' },
                { label: 'Public repositories', value: '100M+' },
                { label: 'Open source projects', value: '1000s' },
                { label: 'Contributors', value: '1B+' },
                { label: 'Top Forbes companies', value: '90+' },
                { label: 'Organizations', value: '4M+' }
              ].map((stat, index) => (
                <div key={index} className="flex flex-col items-center justify-center">
                  <dt className="mb-2 text-3xl font-extrabold">{stat.value}</dt>
                  <dd className="text-gray-500 dark:text-gray-400">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}
        {activeTab === 'about' && (
          <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800">
            <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              We invest in the world’s potential
            </h2>
            <ul role="list" className="space-y-4 text-gray-500 dark:text-gray-400">
              {/* Services list */}
              {[
                'Dynamic reports and dashboards',
                'Templates for everyone',
                'Development workflow',
                'Limitless business automation'
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-2 rtl:space-x-reverse">
                  <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="leading-tight">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        {activeTab === 'faq' && (
          <div className="p-4 bg-white rounded-lg dark:bg-gray-800">
            <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-800 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
              {/* FAQ Accordion */}
              {[
                {
                  id: 1,
                  question: 'What is Flowbite?',
                  answer: 'Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.'
                },
                {
                  id: 2,
                  question: 'Is there a Figma file available?',
                  answer: 'Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.'
                },
                {
                  id: 3,
                  question: 'What are the differences between Flowbite and Tailwind UI?',
                  answer: 'The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product.'
                }
              ].map(({ id, question, answer }) => (
                <div key={id}>
                  <h2 id={`accordion-flush-heading-${id}`}>
                    <button
                      type="button"
                      className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 rtl:text-right dark:border-gray-700 dark:text-gray-400"
                      onClick={() => handleAccordionToggle(id)}
                      aria-expanded={activeAccordion === id}
                      aria-controls={`accordion-flush-body-${id}`}
                    >
                      <span>{question}</span>
                      <svg
                        className={`w-3 h-3 transition-transform ${activeAccordion === id ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                      </svg>
                    </button>
                  </h2>
                  <div
                    id={`accordion-flush-body-${id}`}
                    className={`py-5 border-b border-gray-200 dark:border-gray-700 ${activeAccordion === id ? 'block' : 'hidden'}`}
                    aria-labelledby={`accordion-flush-heading-${id}`}
                  >
                    <p className="mb-2 text-gray-500 dark:text-gray-400">{answer}</p>
                    {id === 3 && (
                      <ul className="text-gray-500 list-disc ps-5 dark:text-gray-400">
                        <li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
                        <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default TabComponent;
