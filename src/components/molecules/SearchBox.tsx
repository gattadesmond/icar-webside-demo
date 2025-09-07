'use client';

import { useState } from 'react';
import { Search, MapPin, Car, Wrench, Check, ChevronsUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { useMediaQuery } from '@/hooks/use-media-query';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

interface SearchBoxProps {
  className?: string;
}

const cities = [
  { value: 'hanoi', label: 'Hà Nội' },
  { value: 'hochiminh', label: 'TP. Hồ Chí Minh' },
  { value: 'danang', label: 'Đà Nẵng' },
  { value: 'haiphong', label: 'Hải Phòng' },
  { value: 'cantho', label: 'Cần Thơ' },
  { value: 'binhduong', label: 'Bình Dương' },
  { value: 'dongnai', label: 'Đồng Nai' },
  { value: 'khanhhoa', label: 'Khánh Hòa' },
];

const carBrands = [
  { value: 'toyota', label: 'Toyota' },
  { value: 'honda', label: 'Honda' },
  { value: 'ford', label: 'Ford' },
  { value: 'hyundai', label: 'Hyundai' },
  { value: 'kia', label: 'Kia' },
  { value: 'mazda', label: 'Mazda' },
  { value: 'nissan', label: 'Nissan' },
  { value: 'bmw', label: 'BMW' },
  { value: 'mercedes', label: 'Mercedes-Benz' },
  { value: 'audi', label: 'Audi' },
  { value: 'lexus', label: 'Lexus' },
  { value: 'volkswagen', label: 'Volkswagen' },
];

const symptoms = [
  { value: 'engine', label: 'Động cơ không nổ' },
  { value: 'brake', label: 'Phanh không ăn' },
  { value: 'transmission', label: 'Hộp số có vấn đề' },
  { value: 'electrical', label: 'Hệ thống điện' },
  { value: 'ac', label: 'Điều hòa không mát' },
  { value: 'tire', label: 'Lốp xe bị mòn' },
  { value: 'battery', label: 'Ắc quy yếu' },
  { value: 'oil', label: 'Rò rỉ dầu nhớt' },
  { value: 'coolant', label: 'Rò rỉ nước làm mát' },
  { value: 'exhaust', label: 'Ống xả có tiếng lạ' },
];

export default function SearchBox({ className = '' }: SearchBoxProps) {
  const router = useRouter();
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [selectedBrand, setSelectedBrand] = useState<string>('');
  const [selectedSymptom, setSelectedSymptom] = useState<string>('');

  // State for controlling popover/drawer open/close
  const [cityOpen, setCityOpen] = useState(false);
  const [brandOpen, setBrandOpen] = useState(false);
  const [symptomOpen, setSymptomOpen] = useState(false);

  // Check if device is desktop
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const getDisplayText = (value: string, options: Array<{ value: string; label: string }>) => {
    const option = options.find(opt => opt.value === value);
    return option ? option.label : '';
  };

  // City Selection Component
  const CitySelection = ({ setOpen, setSelected }: {
    setOpen: (open: boolean) => void;
    setSelected: (value: string) => void;
  }) => (
    <Command>
      <CommandInput placeholder="Tìm thành phố..." />
      <CommandList>
        <CommandEmpty>Không tìm thấy thành phố.</CommandEmpty>
        <CommandGroup>
          {cities.map((city) => (
            <CommandItem
              key={city.value}
              value={city.value}
              onSelect={(currentValue) => {
                setSelected(currentValue === selectedCity ? "" : currentValue);
                setOpen(false);
              }}
            >
              {city.label}
              <Check
                className={cn(
                  "ml-auto h-4 w-4",
                  selectedCity === city.value ? "opacity-100" : "opacity-0"
                )}
              />
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );

  // Brand Selection Component
  const BrandSelection = ({ setOpen, setSelected }: {
    setOpen: (open: boolean) => void;
    setSelected: (value: string) => void;
  }) => (
    <Command>
      <CommandInput placeholder="Tìm hãng xe..." />
      <CommandList>
        <CommandEmpty>Không tìm thấy hãng xe.</CommandEmpty>
        <CommandGroup>
          {carBrands.map((brand) => (
            <CommandItem
              key={brand.value}
              value={brand.value}
              onSelect={(currentValue) => {
                setSelected(currentValue === selectedBrand ? "" : currentValue);
                setOpen(false);
              }}
            >
              {brand.label}
              <Check
                className={cn(
                  "ml-auto h-4 w-4",
                  selectedBrand === brand.value ? "opacity-100" : "opacity-0"
                )}
              />
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );

  // Symptom Selection Component
  const SymptomSelection = ({ setOpen, setSelected }: {
    setOpen: (open: boolean) => void;
    setSelected: (value: string) => void;
  }) => (
    <Command>
      <CommandInput placeholder="Tìm triệu chứng..." />
      <CommandList>
        <CommandEmpty>Không tìm thấy triệu chứng.</CommandEmpty>
        <CommandGroup>
          {symptoms.map((symptom) => (
            <CommandItem
              key={symptom.value}
              value={symptom.value}
              onSelect={(currentValue) => {
                setSelected(currentValue === selectedSymptom ? "" : currentValue);
                setOpen(false);
              }}
            >
              {symptom.label}
              <Check
                className={cn(
                  "ml-auto h-4 w-4",
                  selectedSymptom === symptom.value ? "opacity-100" : "opacity-0"
                )}
              />
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );

  return (
    <div className={cn(
      "flex flex-col w-full md:flex-row items-center bg-black/80 backdrop-blur-sm  border-2 border-white/30 rounded-2xl max-w-3xl  mx-auto gap-0",
      className
    )}>
      {/* City Selection */}
      {isDesktop ? (
        <Popover open={cityOpen} onOpenChange={setCityOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              role="combobox"
              aria-expanded={cityOpen}
              className="w-full md:w-auto  md:flex-1 h-16 px-4 text-left hover:bg-white/10 rounded-xl border-0 justify-between cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-white" />
                <div className="flex flex-col items-start">
                  <span className="text-xs text-white/60">Thành phố</span>
                  <span className="text-base font-medium text-white truncate">
                    {selectedCity ? getDisplayText(selectedCity, cities) : 'Chọn thành phố'}
                  </span>
                </div>
              </div>
              <ChevronsUpDown className="h-4 w-4 text-white/50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[300px] p-0" align="start">
            <CitySelection setOpen={setCityOpen} setSelected={setSelectedCity} />
          </PopoverContent>
        </Popover>
      ) : (
        <Drawer open={cityOpen} onOpenChange={setCityOpen}>
          <DrawerTrigger asChild>
            <Button
              variant="ghost"
              role="combobox"
              aria-expanded={cityOpen}
              className="w-full md:w-auto  md:flex-1 h-16 px-4 text-left hover:bg-white/10 rounded-xl border-0 justify-between cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-white" />
                <div className="flex flex-col items-start">
                  <span className="text-xs text-white/60">Thành phố</span>
                  <span className="text-base font-medium text-white truncate">
                    {selectedCity ? getDisplayText(selectedCity, cities) : 'Chọn thành phố'}
                  </span>
                </div>
              </div>
              <ChevronsUpDown className="h-4 w-4 text-white/50" />
            </Button>
          </DrawerTrigger>
          <DrawerContent className="h-[70vh]">
            <div className="mt-4 border-t h-full overflow-y-auto">
              <CitySelection setOpen={setCityOpen} setSelected={setSelectedCity} />
            </div>
          </DrawerContent>
        </Drawer>
      )}

      {/* Separator */}
      <div className="block w-full h-[1px] md:w-px md:h-8 bg-white/20 mx-2 shrink-0" />

      {/* Car Brand Selection */}
      {isDesktop ? (
        <Popover open={brandOpen} onOpenChange={setBrandOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              role="combobox"
              aria-expanded={brandOpen}
              className="w-full md:w-auto  md:flex-1 h-16 px-4 text-left hover:bg-white/10 rounded-xl border-0 justify-between  cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Car className="h-5 w-5 text-white" />
                <div className="flex flex-col items-start">
                  <span className="text-xs text-white/60">Hãng xe</span>
                  <span className="text-base font-medium text-white truncate">
                    {selectedBrand ? getDisplayText(selectedBrand, carBrands) : 'Chọn hãng xe'}
                  </span>
                </div>
              </div>
              <ChevronsUpDown className="h-4 w-4 text-white/50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[300px] p-0" align="start">
            <BrandSelection setOpen={setBrandOpen} setSelected={setSelectedBrand} />
          </PopoverContent>
        </Popover>
      ) : (
        <Drawer open={brandOpen} onOpenChange={setBrandOpen}>
          <DrawerTrigger asChild>
            <Button
              variant="ghost"
              role="combobox"
              aria-expanded={brandOpen}
              className="w-full md:w-auto  md:flex-1 h-16 px-4 text-left hover:bg-white/10 rounded-xl border-0 justify-between  cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Car className="h-5 w-5 text-white" />
                <div className="flex flex-col items-start">
                  <span className="text-xs text-white/60">Hãng xe</span>
                  <span className="text-base font-medium text-white truncate">
                    {selectedBrand ? getDisplayText(selectedBrand, carBrands) : 'Chọn hãng xe'}
                  </span>
                </div>
              </div>
              <ChevronsUpDown className="h-4 w-4 text-white/50" />
            </Button>
          </DrawerTrigger>
          <DrawerContent className="h-[70vh]">
            <div className="mt-4 border-t h-full overflow-y-auto">
              <BrandSelection setOpen={setBrandOpen} setSelected={setSelectedBrand} />
            </div>
          </DrawerContent>
        </Drawer>
      )}

      {/* Separator */}
      <div className="block w-full h-[1px] md:w-px md:h-8 bg-white/20 mx-2 shrink-0" />

      {/* Symptom Selection */}
      {isDesktop ? (
        <Popover open={symptomOpen} onOpenChange={setSymptomOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              role="combobox"
              aria-expanded={symptomOpen}
              className="w-full md:w-auto  md:flex-1 h-16 px-4 text-left hover:bg-white/10 rounded-xl border-0 justify-between  cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Wrench className="h-5 w-5 text-white" />
                <div className="flex flex-col items-start">
                  <span className="text-xs text-white/60">Triệu chứng</span>
                  <span className="text-base font-medium text-white truncate">
                    {selectedSymptom ? getDisplayText(selectedSymptom, symptoms) : 'Chọn triệu chứng'}
                  </span>
                </div>
              </div>
              <ChevronsUpDown className="h-4 w-4 text-white/50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[300px] p-0" align="start">
            <SymptomSelection setOpen={setSymptomOpen} setSelected={setSelectedSymptom} />
          </PopoverContent>
        </Popover>
      ) : (
        <Drawer open={symptomOpen} onOpenChange={setSymptomOpen}>
          <DrawerTrigger asChild>
            <Button
              variant="ghost"
              role="combobox"
              aria-expanded={symptomOpen}
              className="w-full md:w-auto  md:flex-1 h-16 px-4 text-left hover:bg-white/10 rounded-xl border-0 justify-between  cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Wrench className="h-5 w-5 text-white" />
                <div className="flex flex-col items-start">
                  <span className="text-xs text-white/60">Triệu chứng</span>
                  <span className="text-base font-medium text-white truncate">
                    {selectedSymptom ? getDisplayText(selectedSymptom, symptoms) : 'Chọn triệu chứng'}
                  </span>
                </div>
              </div>
              <ChevronsUpDown className="h-4 w-4 text-white/50" />
            </Button>
          </DrawerTrigger>
          <DrawerContent className="h-[70vh]">
            <div className="mt-4 border-t h-full overflow-y-auto">
              <SymptomSelection setOpen={setSymptomOpen} setSelected={setSelectedSymptom} />
            </div>
          </DrawerContent>
        </Drawer>
      )}

      {/* Search Button */}
      <div className='w-full md:w-auto p-3'>
        <Button
          size="icon"
          className="h-12 w-full md:w-12 md:ml-2 bg-red-500/50 hover:bg-red-500 border-0 rounded-lg md:rounded-xl"
          onClick={() => {
            router.push('/garage-listings');
          }}
        >
          <Search className="h-5 w-5 text-white" />
        </Button>
      </div>

    </div>
  );
}
