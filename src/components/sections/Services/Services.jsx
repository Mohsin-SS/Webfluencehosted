import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { WhatsappLogo, Robot, PhoneCall, Megaphone, UsersThree, TrendUp, VideoCamera, Browser, DeviceMobile, MagicWand } from '@phosphor-icons/react';
import WordsPullUp from '../../ui/WordsPullUp';
import './Services.css';

// Map phosphor icon names for use with lucide-style approach
const serviceData = [
  {
    category: 'AI Services',
    items: [
      { Icon: WhatsappLogo, title: 'AI WhatsApp Automation', desc: 'Automate customer conversations, lead capture, and follow-ups directly on WhatsApp using intelligent AI agents.' },
      { Icon: Robot,        title: 'AI Chatbots',            desc: 'Custom-built chatbots for websites and apps that handle support, sales, and FAQs around the clock.' },
      { Icon: PhoneCall,    title: 'AI Calling Agents',      desc: 'Intelligent voice agents that call leads, qualify prospects, and book appointments — fully automated.' },
    ],
  },
  {
    category: 'Marketing',
    items: [
      { Icon: Megaphone,   title: 'Social Media Marketing',  desc: 'Strategic campaigns to boost your brand visibility and engagement across multiple social platforms.' },
      { Icon: UsersThree,  title: 'Social Media Management', desc: 'Comprehensive management of your social channels to build community and maintain active presence.' },
      { Icon: TrendUp,     title: 'SEO Optimization',        desc: 'Data-driven search engine optimization to rank higher on Google and drive organic targeted traffic.' },
      { Icon: VideoCamera, title: 'AI Marketing Videos',     desc: 'High-quality promotional and marketing videos generated rapidly with advanced AI tools.' },
    ],
  },
  {
    category: 'Development',
    items: [
      { Icon: Browser,      title: 'Websites & Landing Pages', desc: 'High-converting, beautifully designed websites and landing pages tailored to your brand and goals.' },
      { Icon: DeviceMobile, title: 'Mobile Apps',              desc: 'Native and cross-platform mobile apps designed for performance, usability, and business growth.' },
      { Icon: MagicWand,    title: 'GFX / VFX',               desc: 'Professional graphic design and visual effects to create stunning, memorable brand identities.' },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 36, scale: 0.96 },
  visible: (i) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="services" className="services-section">
      <div className="services-section__noise" aria-hidden="true" />
      <div className="container">
        {/* Header */}
        <div className="services__header">
          <motion.span
            className="services__label"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What We Do
          </motion.span>
          <h2 className="services__title">
            <WordsPullUp text="Our Core Services" delay={0.05} />
            <br />
            <WordsPullUp
              text="Built to scale your business."
              style={{ color: 'rgba(222,219,200,0.38)' }}
              delay={0.2}
            />
          </h2>
        </div>

        {/* Categories */}
        {serviceData.map((group, gi) => (
          <div key={group.category} className="services__group">
            <motion.h3
              className="services__group-title"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {group.category}
            </motion.h3>
            <div className="services__grid" ref={gi === 0 ? ref : null}>
              {group.items.map((svc, si) => {
                const globalIndex = serviceData.slice(0, gi).reduce((acc, g) => acc + g.items.length, 0) + si;
                return (
                  <motion.div
                    key={svc.title}
                    className="service-card"
                    custom={si}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-40px' }}
                    whileHover={{ y: -5, transition: { duration: 0.25 } }}
                  >
                    <div className="service-card__icon">
                      <svc.Icon size={22} weight="duotone" />
                    </div>
                    <h4 className="service-card__title">{svc.title}</h4>
                    <p className="service-card__desc">{svc.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
