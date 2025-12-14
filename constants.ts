import { Project, CaseStudyDetail } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'autonomous-logistics',
    title: 'Autonomous Logistics Fleet',
    summary: 'Orchestrating 50+ AMR robots with sub-10ms latency for high-density warehouses.',
    tags: ['Mechatronics', 'System Architecture', 'Real-time'],
    thumbnail: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&q=80&w=1000' // Industrial/Robotics
  },
  {
    id: 'medical-iot',
    title: 'Connected Infusion Pump',
    summary: 'Redesigning the human-machine interface for critical care medical devices.',
    tags: ['UX/UI', 'Embedded', 'Safety Critical'],
    thumbnail: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1000' // Medical/Clean
  },
  {
    id: 'smart-grid',
    title: 'Decentralized Energy Grid',
    summary: 'Peer-to-peer energy trading platform integrating solar hardware with blockchain ledger.',
    tags: ['Software', 'IoT', 'Blockchain'],
    thumbnail: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1000' // City/Grid/Night
  },
  {
    id: 'haptic-feedback',
    title: 'Tactile VR Controller',
    summary: 'Developing novel actuator drivers for realistic texture simulation in virtual environments.',
    tags: ['R&D', 'Hardware', 'Prototyping'],
    thumbnail: 'https://images.unsplash.com/photo-1622979135225-d2ba269fb1bd?auto=format&fit=crop&q=80&w=1000' // VR/Abstract
  }
];

export const CASE_STUDIES: Record<string, CaseStudyDetail> = {
  'autonomous-logistics': {
    id: 'autonomous-logistics',
    title: 'Autonomous Logistics Fleet',
    summary: 'Orchestrating 50+ AMR robots with sub-10ms latency.',
    tags: ['Mechatronics', 'System Architecture', 'Real-time'],
    thumbnail: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&q=80&w=1000',
    snapshot: {
      summary: 'Designing a decentralized control system to eliminate deadlocks and reduce latency in high-density fulfillment centers.',
      context: 'This project focused on solving traffic orchestration issues for logistics operators within electrically noisy, high-density warehouse environments.',
      role: 'Lead Systems Engineer, responsible for decision-making across hardware sensor selection, network topology, and fleet management software.',
    },
    problem: {
      content: 'The existing system worked technically—but failed in practice. Robots faced frequent deadlocks and collisions in narrow aisles due to WiFi interference and centralized processing lag. This caused 15% downtime, costing approx $40k/hour during peak seasons. The challenge wasn’t just speed—it was reliability.'
    },
    constraints: {
      content: 'These constraints shaped every design and technical decision:',
      bulletPoints: [
        'Limited hardware resources (Raspberry Pi 4 equiv) to save battery.',
        'Max 500ms round-trip latency allowed for safety stops.',
        'Hardware BOM cost cap of $2,500 per unit.',
        'Legacy infrastructure prevented full facility rewiring.'
      ]
    },
    decisions: {
      content: 'Rather than redesign everything, I focused on high-impact decision points. We moved from a purely centralized control model to a hybrid edge-mesh network. Robots negotiated right-of-way locally using UWB (Ultra-Wideband) peer-to-peer comms, only reporting status to the server. I prioritized reliability over mapping resolution, switching LIDAR to lower-res solid state to allocate budget to better IMUs.',
    },
    solution: {
      content: 'The final solution introduced a decentralized fleet system where intelligence is distributed. The central server acts as a traffic controller, not a driver. The UI provides a "Holistic View" for operators but requires zero manual intervention for standard routing.',
      bulletPoints: [
        'Clearer system states via custom UDP binary protocol.',
        'Simplified interaction flows for floor operators.',
        'A structure that engineering and users could both understand.'
      ]
    },
    impact: {
      content: 'As a result, the system behavior became more predictable and throughput increased by 22% due to tighter passing tolerances.',
      bulletPoints: [
        'Zero collision-related downtime in first 6 months.',
        'System latency reduced from 200ms avg to 12ms stable.',
        'Deployed successfully in 3 major fulfillment centers.'
      ]
    },
    gallery: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000', // Technical lab
      'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=1000', // AI/Data
    ],
    reflection: {
      content: 'If I revisited this project, I would explore earlier validation of edge cases via high-fidelity simulation. While the decentralized approach solved latency, debugging distributed race conditions became significantly harder. This taught me that decentralization adds complexity that must be weighed against its reliability benefits.'
    }
  },
  'medical-iot': {
    id: 'medical-iot',
    title: 'Connected Infusion Pump',
    summary: 'Redesigning the human-machine interface for critical care.',
    tags: ['UX/UI', 'Embedded', 'Safety Critical'],
    thumbnail: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1000',
    snapshot: {
      summary: 'Designing a context-aware interface to reduce dosing errors and improve nurse confidence in ICU settings.',
      context: 'This project focused on solving usability friction for ICU nurses and patients within strict IEC 62366 usability standards.',
      role: 'Product Designer & Embedded Developer, responsible for UI/UX redesign and front-end implementation on embedded Linux.',
    },
    problem: {
      content: 'While technically functional, the previous interface caused frequent operational friction. Nurses struggled with deep menu discrepancies and lacked clear feedback on the resistive touch screens. The core challenge was to reduce cognitive load and prevent errors in a high-stress environment, without changing the underlying hardware.'
    },
    constraints: {
      content: 'These constraints shaped every design and technical decision:',
      bulletPoints: [
        'Screen resolution limited to 480x272 on resistive touch hardware.',
        'Users often wear gloves and operate in dim lighting.',
        'No cloud connectivity allowed for security reasons.',
        'Must pass strict FDA human factors validation.'
      ]
    },
    decisions: {
      content: 'I prioritized clarity over flexibility. I prioritized high contrast and large touch targets over aesthetic minimalism. We removed the "numeric keypad" as default input, replacing it with smart presets based on drug library data. Several options were explored, but choices were guided by long-term safety and ease of use—not visual preference.',
    },
    solution: {
      content: 'The final solution introduced a context-aware interface that predicts the most likely next action. If a specific drug is selected, only safe ranges are selectable. Visual feedback confirms every touch instantly, aligned with real-world usage patterns.',
    },
    impact: {
      content: 'As a result, setup time reduced by 40% and nurses reported 90% higher confidence in device status.',
      bulletPoints: [
        'Passed FDA human factors validation on first attempt.',
        'Zero critical dosing errors recorded in validation study.',
        'User errors were significantly reduced.'
      ]
    },
    gallery: [
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000', // Medical tech
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000', // Data/Screen
    ],
    reflection: {
      content: 'Designing for resistive screens was a constraint that shaped the entire aesthetic. I learned that visual affordances (clear borders, distinct active states) are non-negotiable when tactile feedback is limited. It reinforced that clarity often trumps minimalism in safety-critical systems.'
    }
  }
};