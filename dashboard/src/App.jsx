import React, { useState } from 'react';
import Button from './components/Button';
import Card from './components/Card';
import Avatar, { AvatarStack } from './components/Avatar';
import Badge from './components/Badge';
import ProgressIndicator from './components/ProgressIndicator';
import Input, { TextArea } from './components/Input';
import Toggle from './components/Toggle';
import Dropdown from './components/Dropdown';
import Modal from './components/Modal';
import NotificationItem from './components/NotificationItem';
import UserListItem from './components/UserListItem';
import Calendar from './components/Calendar';
import {
  Search,
  Bell,
  Settings,
  User,
  Star,
  Heart,
  Trash2,
  Edit,
  Download,
  Upload,
  MoreVertical
} from 'lucide-react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toggleValue, setToggleValue] = useState(false);
  const [dropdownValue, setDropdownValue] = useState('');
  const [inputValue, setInputValue] = useState('');

  // Mock data
  const avatars = [
    { src: '', initials: 'JD', alt: 'John Doe' },
    { src: '', initials: 'SM', alt: 'Sarah Miller' },
    { src: '', initials: 'MJ', alt: 'Mike Johnson' },
    { src: '', initials: 'EW', alt: 'Emily Wilson' },
    { src: '', initials: 'RB', alt: 'Robert Brown' },
    { src: '', initials: 'LT', alt: 'Lisa Taylor' },
  ];

  const dropdownOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  return (
    <div className="min-h-screen bg-lime p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-h1 text-neutral-black mb-2">
            Vibrant Workspace Design System
          </h1>
          <p className="text-body text-neutral-gray-700">
            A comprehensive showcase of all UI components
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Buttons Section */}
          <Card title="Buttons" subtitle="All button variants and states">
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-caption text-neutral-gray-500 uppercase font-semibold">Primary</p>
                <Button variant="primary">Primary Button</Button>
              </div>
              <div className="space-y-2">
                <p className="text-caption text-neutral-gray-500 uppercase font-semibold">Secondary</p>
                <Button variant="secondary">Secondary Button</Button>
              </div>
              <div className="space-y-2">
                <p className="text-caption text-neutral-gray-500 uppercase font-semibold">Success</p>
                <Button variant="success" icon={<Star className="w-4 h-4" />}>
                  Success Button
                </Button>
              </div>
              <div className="space-y-2">
                <p className="text-caption text-neutral-gray-500 uppercase font-semibold">Destructive</p>
                <Button variant="destructive" icon={<Trash2 className="w-4 h-4" />}>
                  Delete
                </Button>
              </div>
              <div className="space-y-2">
                <p className="text-caption text-neutral-gray-500 uppercase font-semibold">Icon Only</p>
                <div className="flex gap-2">
                  <Button variant="icon">
                    <Settings className="w-5 h-5" />
                  </Button>
                  <Button variant="icon">
                    <Bell className="w-5 h-5" />
                  </Button>
                  <Button variant="icon">
                    <User className="w-5 h-5" />
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-caption text-neutral-gray-500 uppercase font-semibold">Sizes</p>
                <div className="flex flex-wrap gap-2">
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Avatars Section */}
          <Card title="Avatars" subtitle="Profile images and stacks">
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-caption text-neutral-gray-500 uppercase font-semibold">Sizes</p>
                <div className="flex items-center gap-3">
                  <Avatar size="xs" initials="XS" />
                  <Avatar size="sm" initials="SM" />
                  <Avatar size="md" initials="MD" />
                  <Avatar size="lg" initials="LG" />
                  <Avatar size="xl" initials="XL" />
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-caption text-neutral-gray-500 uppercase font-semibold">Avatar Stack</p>
                <AvatarStack avatars={avatars} maxVisible={5} />
              </div>
            </div>
          </Card>

          {/* Badges Section */}
          <Card title="Badges" subtitle="Labels and status indicators">
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-caption text-neutral-gray-500 uppercase font-semibold">Tags</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="tag">Design</Badge>
                  <Badge variant="tag">Development</Badge>
                  <Badge variant="tag">Marketing</Badge>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-caption text-neutral-gray-500 uppercase font-semibold">Count</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="count">5</Badge>
                  <Badge variant="count">12</Badge>
                  <Badge variant="count">99+</Badge>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-caption text-neutral-gray-500 uppercase font-semibold">Status</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="status">Active</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="error">Error</Badge>
                  <Badge variant="warning">Warning</Badge>
                </div>
              </div>
            </div>
          </Card>

          {/* Progress Indicators */}
          <Card title="Progress Indicators" subtitle="Circular progress rings">
            <div className="flex items-center justify-around">
              <div className="text-center">
                <ProgressIndicator percentage={25} size="sm" />
                <p className="text-caption text-neutral-gray-500 mt-2">Small</p>
              </div>
              <div className="text-center">
                <ProgressIndicator percentage={65} size="md" />
                <p className="text-caption text-neutral-gray-500 mt-2">Medium</p>
              </div>
              <div className="text-center">
                <ProgressIndicator percentage={90} size="lg" />
                <p className="text-caption text-neutral-gray-500 mt-2">Large</p>
              </div>
            </div>
          </Card>

          {/* Form Inputs */}
          <Card title="Form Inputs" subtitle="Text inputs and text areas">
            <div className="space-y-4">
              <Input
                label="Email"
                type="email"
                placeholder="Enter your email"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <Input
                label="Search"
                placeholder="Search..."
                icon={<Search className="w-4 h-4" />}
              />
              <Input
                label="Error State"
                placeholder="Invalid input"
                error="This field is required"
              />
              <TextArea
                label="Description"
                placeholder="Enter description..."
                rows={3}
              />
            </div>
          </Card>

          {/* Toggles and Dropdowns */}
          <Card title="Toggles & Dropdowns" subtitle="Interactive controls">
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-caption text-neutral-gray-500 uppercase font-semibold">Toggle Switch</p>
                <Toggle
                  label="Enable notifications"
                  checked={toggleValue}
                  onChange={(e) => setToggleValue(e.target.checked)}
                />
                <Toggle
                  label="Dark mode"
                  checked={false}
                />
              </div>
              <div className="space-y-2">
                <p className="text-caption text-neutral-gray-500 uppercase font-semibold">Dropdown</p>
                <Dropdown
                  label="Select an option"
                  options={dropdownOptions}
                  value={dropdownValue}
                  onChange={(opt) => setDropdownValue(opt.value)}
                  placeholder="Choose..."
                />
              </div>
            </div>
          </Card>

          {/* Calendar */}
          <Card title="Calendar" subtitle="Month view with navigation" className="lg:col-span-2">
            <Calendar />
          </Card>

          {/* Notifications */}
          <Card title="Notifications" subtitle="User notifications and requests" className="lg:col-span-2">
            <div className="space-y-2">
              <NotificationItem
                avatar={{ initials: 'CT', alt: 'Christine Thompson' }}
                message="Christine Thompson wants to join your workspace"
                timestamp="2 minutes ago"
                hasActions={true}
                onAccept={() => console.log('Accepted')}
                onDeny={() => console.log('Denied')}
              />
              <NotificationItem
                avatar={{ initials: 'JD', alt: 'John Doe' }}
                message="John Doe mentioned you in a comment"
                timestamp="1 hour ago"
              />
              <NotificationItem
                avatar={{ initials: 'SM', alt: 'Sarah Miller' }}
                message="Sarah Miller shared a file with you"
                timestamp="3 hours ago"
              />
            </div>
          </Card>

          {/* User List */}
          <Card title="Team Members" subtitle="Contact list" className="lg:col-span-1">
            <UserListItem
              avatar={{ initials: 'CT', alt: 'Christine Thompson' }}
              name="Christine Thompson"
              role="Project Manager"
              onMessage={() => console.log('Message')}
            />
            <UserListItem
              avatar={{ initials: 'MJ', alt: 'Mike Johnson' }}
              name="Mike Johnson"
              role="Lead Designer"
              onMessage={() => console.log('Message')}
            />
            <UserListItem
              avatar={{ initials: 'EW', alt: 'Emily Wilson' }}
              name="Emily Wilson"
              role="Developer"
              onMessage={() => console.log('Message')}
            />
          </Card>

          {/* Project Card with Progress */}
          <Card title="Active Projects" subtitle="Current work in progress" className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <ProgressIndicator percentage={75} size="md" />
                  <Button variant="icon">
                    <MoreVertical className="w-5 h-5" />
                  </Button>
                </div>
                <div>
                  <h4 className="text-h4 text-neutral-black">Website Redesign</h4>
                  <p className="text-body-sm text-neutral-gray-700 mt-1">
                    Updating the landing page with new brand identity
                  </p>
                </div>
                <AvatarStack avatars={avatars.slice(0, 3)} />
              </div>

              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <ProgressIndicator percentage={45} size="md" />
                  <Button variant="icon">
                    <MoreVertical className="w-5 h-5" />
                  </Button>
                </div>
                <div>
                  <h4 className="text-h4 text-neutral-black">Mobile App</h4>
                  <p className="text-body-sm text-neutral-gray-700 mt-1">
                    Developing iOS and Android applications
                  </p>
                </div>
                <AvatarStack avatars={avatars.slice(2, 5)} />
              </div>
            </div>
          </Card>

          {/* Modal Trigger */}
          <Card title="Modal Dialog" subtitle="Overlay interactions" className="lg:col-span-1">
            <Button variant="primary" onClick={() => setIsModalOpen(true)}>
              Open Modal
            </Button>
            <p className="text-body-sm text-neutral-gray-500 mt-3">
              Click to see a modal dialog with actions
            </p>
          </Card>

          {/* Typography Showcase */}
          <Card title="Typography" subtitle="Text hierarchy and styles" className="lg:col-span-3">
            <div className="space-y-3">
              <div>
                <p className="text-caption text-neutral-gray-500">Hero</p>
                <h1 className="text-hero text-neutral-black">Hero Heading</h1>
              </div>
              <div>
                <p className="text-caption text-neutral-gray-500">Heading 1</p>
                <h1 className="text-h1 text-neutral-black">Heading 1</h1>
              </div>
              <div>
                <p className="text-caption text-neutral-gray-500">Heading 2</p>
                <h2 className="text-h2 text-neutral-black">Heading 2</h2>
              </div>
              <div>
                <p className="text-caption text-neutral-gray-500">Heading 3</p>
                <h3 className="text-h3 text-neutral-black">Heading 3</h3>
              </div>
              <div>
                <p className="text-caption text-neutral-gray-500">Body</p>
                <p className="text-body text-neutral-gray-700">
                  This is body text that demonstrates the default paragraph style with proper line height and spacing for optimal readability.
                </p>
              </div>
              <div>
                <p className="text-caption text-neutral-gray-500">Small</p>
                <p className="text-body-sm text-neutral-gray-700">
                  This is smaller body text used for supporting content and captions.
                </p>
              </div>
            </div>
          </Card>

          {/* Icon Showcase */}
          <Card title="Icons" subtitle="Lucide icon library" className="lg:col-span-3">
            <div className="flex flex-wrap gap-4">
              <div className="flex flex-col items-center gap-2">
                <div className="p-3 bg-neutral-gray-100 rounded-lg">
                  <Search className="w-6 h-6 text-neutral-gray-700" />
                </div>
                <span className="text-caption text-neutral-gray-500">Search</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="p-3 bg-neutral-gray-100 rounded-lg">
                  <Bell className="w-6 h-6 text-neutral-gray-700" />
                </div>
                <span className="text-caption text-neutral-gray-500">Bell</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="p-3 bg-neutral-gray-100 rounded-lg">
                  <Settings className="w-6 h-6 text-neutral-gray-700" />
                </div>
                <span className="text-caption text-neutral-gray-500">Settings</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="p-3 bg-neutral-gray-100 rounded-lg">
                  <User className="w-6 h-6 text-neutral-gray-700" />
                </div>
                <span className="text-caption text-neutral-gray-500">User</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="p-3 bg-neutral-gray-100 rounded-lg">
                  <Heart className="w-6 h-6 text-neutral-gray-700" />
                </div>
                <span className="text-caption text-neutral-gray-500">Heart</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="p-3 bg-neutral-gray-100 rounded-lg">
                  <Star className="w-6 h-6 text-neutral-gray-700" />
                </div>
                <span className="text-caption text-neutral-gray-500">Star</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="p-3 bg-neutral-gray-100 rounded-lg">
                  <Edit className="w-6 h-6 text-neutral-gray-700" />
                </div>
                <span className="text-caption text-neutral-gray-500">Edit</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="p-3 bg-neutral-gray-100 rounded-lg">
                  <Download className="w-6 h-6 text-neutral-gray-700" />
                </div>
                <span className="text-caption text-neutral-gray-500">Download</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="p-3 bg-neutral-gray-100 rounded-lg">
                  <Upload className="w-6 h-6 text-neutral-gray-700" />
                </div>
                <span className="text-caption text-neutral-gray-500">Upload</span>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Confirm Action"
        actions={
          <>
            <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => setIsModalOpen(false)}>
              Confirm
            </Button>
          </>
        }
      >
        <p className="text-body text-neutral-gray-700">
          This is a modal dialog that overlays the content. It includes a backdrop blur effect and smooth animations.
        </p>
      </Modal>
    </div>
  );
}

export default App;
