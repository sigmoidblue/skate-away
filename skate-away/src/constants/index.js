import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { skate1, skate2, skate3, customer1, customer2, skate4, skate5, skate6, skate7, thumbnailSkate1, thumbnailSkate2, thumbnailSkate3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const skates = [
    {
        thumbnail: thumbnailSkate1,
        bigSkate: skate1,
    },
    {
        thumbnail: thumbnailSkate2,
        bigSkate: skate2,
    },
    {
        thumbnail: thumbnailSkate3,
        bigSkate: skate3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '350k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: skate4,
        name: "Classic Carve",
        price: "$70.20",
    },
    {
        imgURL: skate6,
        name: "Street Swell",
        price: "$67.30",
    },
    {
        imgURL: skate5,
        name: "Eco Rider",
        price: "$84.20",
    },
    {
        imgURL: skate7,
        name: "Shadow Skate",
        price: "$80.20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Max Ryder',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Ava Boardman',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Classic Carve", link: "/" },
            { name: "Street Swell", link: "/" },
            { name: "Eco Rider", link: "/" },
            { name: "Shadow Skate", link: "/" },
            { name: "Neon Flux", link: "/" },
            { name: "Retro Glide", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@skate-away.com" },
            { name: "+921234567890", link: "tel:+921234567890" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
