import { Component, Newspaper, Network, PartyPopper, PenBox, File, Trophy, LayoutDashboardIcon, ShieldQuestionIcon } from 'lucide-react'

export const navLinks: {title: string, href: string, dropdownLinks: {dropdownTitle: string, Icon: any, dropdownHref: string}[]}[] = [
    {title: "Product", href: "/product", dropdownLinks: [
      {dropdownTitle: "Design", Icon: Component, dropdownHref: "/product/design"},
      {dropdownTitle: "Content", Icon: LayoutDashboardIcon, dropdownHref: "/product/content"},
      {dropdownTitle: "Publish", Icon: PenBox, dropdownHref: "/product/publish"},
    ]},
    {title: "Resources", href: "/resources", dropdownLinks: [
      {dropdownTitle: "Blog", Icon: Newspaper, dropdownHref: "/resources/blog"},
      {dropdownTitle: "Careers", Icon: Trophy, dropdownHref: "/resources/careers"},
      {dropdownTitle: "Docs", Icon: File, dropdownHref: "/resources/docs"},
      {dropdownTitle: "About", Icon: ShieldQuestionIcon, dropdownHref: "/resources/about"},
    ]},
    {title: "Community", href: "/community", dropdownLinks: [
      {dropdownTitle: "Join", Icon: Network, dropdownHref: "/community/join"},
      {dropdownTitle: "Events", Icon: PartyPopper, dropdownHref: "/community/events"},
    ]},
    {title: "Changelog", href: "/changelog", dropdownLinks: []},
    {title: "Demo", href: "/demo", dropdownLinks: []},
  ]